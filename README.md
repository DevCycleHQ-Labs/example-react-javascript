# DevCycle React SDK Example App

An example app built using [Create React App](https://github.com/facebook/create-react-app) and the [DevCycle React SDK](https://docs.devcycle.com/sdk/client-side-sdks/react/)

## Running the example

* Run `yarn install` in the project directory to install dependencies
* Create a `.env` file and set `REACT_APP_DEVCYCLE_CLIENT_SDK_KEY` to the SDK Key for your environment.\
You can find this under [Settings > Environments](https://app.devcycle.com/r/environments) on the DevCycle dashboard.
* Create a new feature on the dashboard with a string variable named `greeting` and a boolean variable named `spin-logo`
* If you added user targeting to your feature, update the user object `App.js` based on your targeting rules.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
