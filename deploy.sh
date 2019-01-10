set -e
API_BASE_URL=https://api.0xcert.org npm run generate
cd dist
echo 'nonfungiblealliance.org' > CNAME
git init
git add -A
git commit -m "Deploy website"
git push -f git@github.com:0xcert/nonfungiblealliance-www.git master:gh-pages
cd -