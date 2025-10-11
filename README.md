# a-duffy12.github.io

 Portfolio website hosting on Github

## Wedding react app deployment steps

1. the workflow at `.github/workflows/deploy.yml` handles the steps
2. to manually build, run `npm run build` from the root directory
3. add, commit, and push the changes
4. ensure that Github pages it correctly configured to serve through the actions flow by going to Settings > Pages and confirming that the **Source** dropdown has **"GitHub Actions"** selected (instead of "Deploy from a branch")