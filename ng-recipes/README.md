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

To serve the project, run `ng serve`. Optionally, add `--open` to the command to open the project in the browser. By default, this is served at localhost:4200.