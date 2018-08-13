<!-- # NestHerokuReady

This project was generated with [Nest CLI](https://github.com/nestjs/nest-cli) version 5.3.0. -->

# Demo

The simple [demo](https://angular-nestjs.firebaseapp.com) is connected with this [API](https://github.com/martin-trajanovski/nestjs-heroku-ready) deployed on [Heroku](https://arcane-brushlands-72646.herokuapp.com/). It is developed using Nest.js (Angular inspired) Node.js framework

## Clone the repository:

```bash
git clone https://github.com/martin-trajanovski/nestjs-heroku-ready.git
```

## Navigate to the folder and install the dependencies:

```bash
yarn install
```

### Serving an NestHerokuReady (Nestjs project) via a development server

Run `yarn start` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `build/` directory. It is building with flag `--prod` by default.

## Deployment

Create your account (or use existing one) on [heroku](https://heroku.com) go to [dashboard](https://dashboard.heroku.com) click `new->add new app` and give it a name. Run command `heroku git:remote -a <project-name>` to add heroku remote in the git config file. 

Use `yarn deploy` to be able to deploy it on heroku.

## Further help

Feel free to [contact](mailto:martin.trajanovski@gmail.com?Subject=NestHerokuReady%20question/issue/problem) me for any issues or problems.
