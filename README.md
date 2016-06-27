# joshSite

a [Sails](http://sailsjs.org) application


###start the app locally

`sails lift`

###deploy the app to heroku

assuming app is in a published git repo

- open local app directory
`cd my/app/directory/appName`
`touch Procfile && open Procfile`
- add this to the Procfile:
`web: npm start`
- save and close Procfile
- create heroku instance
`heroku create`
- deploy to heroku
`git push heroku master`

###issues / deploy to other hosting providers

http://sailsjs.org/documentation/concepts/deployment/hosting
