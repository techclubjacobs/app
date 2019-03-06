#/usr/bin/env/sh
set -e

projects="life people store"

for project in $projects
do
  echo "Installing dependencies - $project"
  cd $project
  yarn install
  npx tslint --project .
  cd ..
done