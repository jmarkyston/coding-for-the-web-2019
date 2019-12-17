This is the codebase for the "Coding for the Web" 2019 Meetup group.

To clone this Git repository, do the following:

Install Git: https://git-scm.com/downloads

I prefer to use GitKraken (https://www.gitkraken.com/download) to manage Git repos (https://youtu.be/FNgHFFfI4YE)

But you can also clone this repo using the command line:

1. For Windows, go to a folder where you want to clone the repo and shift + click in that folder. Select "Open Powershell window here". For Mac, open Terminal (cmd + space, type "Terminal") and `cd` to the directory where you want to clone the repo.
2. To clone, run `git clone https://github.com/jmarkyston/coding-for-the-web-2019.git`. It will create a new folder and download the repo into that folder.

To initialize the Angular project for the first time, do the following:

1. Install Node.JS: https://nodejs.org/en/download/
2. Install Angular CLI globally: `npm install -g @angular/cli`
3. Install dependencies by running `npm install` in /ng-recipes
4. Make sure the project builds: `ng build`

If you are running your own Serverless API, replace the URL in /ng-recipes/src/app/services/account.service.ts and the `org` in /recipes-api/serverless.yml.

To serve the project, run `ng serve`. Optionally, add `--open` to the command to open the project in the browser. By default, this is served at localhost:4200.

To initialize the Serverless (API) project, do the following:

1. Create an AWS account: https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/
2. Create a Serverless Framework account: https://dashboard.serverless.com/
3. Tie your Serverless and AWS accounts together: From the Serverless dashboard, click "Accounts", and then click "default". Under "AWS credential access role", select "Personal AWS Account" and clik "Create a role wizard". Follow the defaults provided to create a new role, and then copy that role's ARN into the Serverless text field and click "save and exit".
4. Install Node.JS: https://nodejs.org/en/download/
5. Install Serverless globally: `npm install -g serverless`
6. Login to Serverless from the CLI: `serverless login`
7. Install API project dependencies: `npm install` in /recipes-api
8. Update the `serverless.yml` file's `org` value to be your Serverless org.
9. Deploy: `serverless deploy`