# [Non-fungible Alliance](https://nonfungiblealliance.org)-www

Official The Non-fungible Alliance website

## Documentation

* [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md): Development environment setup.
* [docs/PRODUCTION.md](docs/PRODUCTION.md): Production and staging environment setup and management.

## Credits

* David Ličen, *author*

## License (MIT)

```
Copyright (c) 2018 0xcert <admin@0xcert.org>.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated modelation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

## Deployment

Run `npm run deploy:staging` and `npm run deploy:production` to deploy to
staging and production, respectively. Note that this will deploy the code
that you currently have in your working directory.

## Infrastructure

### Create Infra

#### Set up secrets

1. Copy the example secrets file: `cp infra/cf/infra-params-secrets-example.json infra/cf/infra-params-secrets.json`.
2. Edit the file `infra/cf/infra-params-secrets.json` and put in your secrets where needed.

#### Provision infrastructure

```bash
STACK_NAME=nonfungiblealliance-www
aws cloudformation deploy --template-file infra/cf/infra.yml --stack-name $STACK_NAME --parameter-overrides file://./infra/cf/infra-params-secrets.json --capabilities CAPABILITY_NAMED_IAM
```

#### Delete the entire infrastructure

**Warning:** this will wipe out the entire infrastructure for this app,
so be sure this is what you wat to do.

```bash
STACK_NAME=nonfungiblealliance-www
aws cloudformation delete-stack --stack-name $STACK_NAME
```
