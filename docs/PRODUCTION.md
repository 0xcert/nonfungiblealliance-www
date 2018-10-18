# Production

## AWS Amazon

The repository for this project is hosted on Github and we are using Amazon AWS to build and deploy the source code for staging and production servers. The following sections explain the configuration steps needed to setup the staging and production environments.

### S3 Setup

Navigate to AWS S3 and create new buckets `0xcert.org` and `staging.0xcert.org`.

Open each bucket and under `Permissions` apply the policy below to make the bucket public. Make sure you replace the `{bucket-name}` variable with the appropriate name of a bucket.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::{bucket-name}/*"
      ]
    }
  ]
}
```

For each bucket under `Properties` enable `Static website hosting` and set `Index document` to `index.html`.

Navigate to `CloudFront` and create a new distribution for each bucket by clicking the `Create Distribution` button. On the next screen, under `Web`, click `Get Started`. For `Origin Domain Name` DO NOT choose the bucket from the dropdown, but enter the bucket endpoint domain name (e.g. `staging.0xcert.org.s3-website-eu-west-1.amazonaws.com`), for `Viewer Protocol Policy` choose `Redirect HTTP to HTTPS`, for `Allowed HTTP Methods` select `GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE` option, set custom `TTL` values (0 TTL for staging and up to 60 for production), for `Price Class` select `Use All Edge Locations`, for `Alternate Domain Names` write the appropriate domain name (`0xcert.org` or `staging.0xcert.org`), set `SSL Certificate` to `Custom SSL Certificate` and click on `Request or Import a Certificate with ACM` to create the SSL certificate (follow the wizard and create a new certificate for domains `0xcert.org` and `*.0xcert.org`), finally set `Default Root Object` to `index.html` and complete the process.

Create a new `CNAME` DNS record for staging, and `A` alias for apex or root domain, and points them to this new CloudFront locations.

### WWW Domain Redirect

Navigate to AWS S3 and create new bucket `www.0xcert.org`. Open the bucket and under `Properties` enable `Static website hosting`. For `Target bucket or domain` set `0xcert.org`, set `Protocol` to `https` and click `Save`.

Follow the steps from previous section and create a new CloudFront instance, that points to this new S3 bucket. 

Create a new `CNAME` DNS record that points to this CloudFront domain.

### Deployer Credentials

Navigate to `AWS IAM` and under `Users` click `Add user` button to create a new user. For `User name` set `0xcertDeployer` and under `Access type` check the `Programmatic access` option.

On the next page, under `Attach existing policies directly`, click on the `Create policy` button. Use the JSON below to create two policies for staging and production purpose. Name each policy `0xcertS3Deploy`.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "s3:ListAllMyBuckets",
        "s3:HeadBucket",
        "s3:ListObjects"
      ],
      "Resource": "*"
    },
    {
      "Sid": "VisualEditor1",
      "Effect": "Allow",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::staging.0xcert.org/*",
        "arn:aws:s3:::staging.0xcert.org",
        "arn:aws:s3:::0xcert.org/*",
        "arn:aws:s3:::0xcert.org"
      ]
    }
  ]
}
```

Back on the `User permissions` step, attach the newlly created policies and finish the process. Make sure you memorize the credentials at the last step.

## Automatic Deployment

Open the `AWS CodeBuild` pannel and create a new project. Set the `Project name` to `0xcert-www` and for the `Source provider` select `GitHub`. Select `Use a repository in my account` and connect your GitHub account with Amazon AWS and make sure, that you grand access to 0xcert organization. Choose the `0xcert/www` repository from the list and check `Webhook` and `Build Badge` options. Set the `Operating system` to `Ubuntu`, `Runtime` to `Docker`, `Runtime version` to the latest version. For the `Build specification` select `Insert build commands` and paste the YAML configuration below.

```yml
version: 0.2
phases:
  install:
    commands:
      # Installing NodeJS
      - curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
      - apt-get install -y nodejs
      - apt-get install -y build-essential
      # Installing project dependencies
      - npm install
      # Building website
      - npm run generate
      # Installing python
      - apt-get update && apt-get install -y python-dev
      - curl -O https://bootstrap.pypa.io/get-pip.py
      - python get-pip.py
      # Installing AWS CLI
      - pip install awscli
      # Deploying website to staging or production S3 bucket
      - GIT_HASH_DEV="$(git ls-remote | grep refs/heads/dev | awk '{ print $1}')"
      - GIT_HASH_MASTER="$(git ls-remote | grep refs/heads/master | awk '{ print $1}')"
      - if [ "$CODEBUILD_SOURCE_VERSION" = "$GIT_HASH_MASTER" ]; then aws s3 sync --delete ./dist/ s3://0xcert.org/; fi
      - if [ "$CODEBUILD_SOURCE_VERSION" = "$GIT_HASH_DEV" ]; then aws s3 sync --delete ./dist/ s3://staging.0xcert.org/; fi
```

Select `No artifacts` and `No cache` and create a new service role and name it `0xcert-codebuild-www`. Create plaintext environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` and set values based on the user which we created earlier. Press the `Continue` button and finish the process.

## Deployment

The website will now be automatically built and deployed to `https://staging.0xcert.org` when pushing to `dev` branch and to `https://0xcert.org` when pushing to `master` branch. 
