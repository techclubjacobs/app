#/usr/bin/env/sh
set -e

projects="life people store"

for project in $projects
do
  echo "INFO: Installing dependencies - $project"
  cd $project
  yarn install
  echo "SUCCESS: Installing dependencies - $project"
  echo "INFO: Linting - $project"
  npx tslint --project .
  echo "SUCCESS: Linting - $project"
  cd ..
done

for project in $projects
do
  cd $project
  echo "INFO: Building - $project"
  yarn run build
  echo "SUCCESS: Building - $project"
  cd ..
done