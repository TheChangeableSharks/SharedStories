// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
     apiKey: 'AIzaSyBj8SEylmOsqK19CWLlcVSiaPG-pc23cDg',
    authDomain: 'sharedstories-3d3d8.firebaseapp.com',
    databaseURL: 'https://sharedstories-3d3d8.firebaseio.com/',
    projectId: 'sharedstories-3d3d8',
    storageBucket: 'sharedstories-3d3d8.appspot.com',
    messagingSenderId: '100688570908'
  }
};