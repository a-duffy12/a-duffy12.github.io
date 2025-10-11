# a-duffy12.github.io

 Portfolio website hosting on Github

## Wedding react app deployment steps

1. cd to the /wedding directory
2. run `npm run build`
3. cd to the updated /dist directory (inside /wedding/dist)
4. call `git pull origin gh-pages`
5. add changes (`git add .`)
6. commit
7. `git push -f origin master:gh-pages` to force update the branch
8. verify the live site
9. if there are issues, go to the repo > Settings > Pages and check that the deployment is using the `source` option, the `gh-pages` branch, and the `/(root)` directory
