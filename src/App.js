import './App.css';
import { useIsDevCycleInitialized, withDevCycleProvider } from '@devcycle/react-client-sdk';
import ToggleBot from './components/ToggleBot';
import User from './components/User';
import users from './data/users'

if (!process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY) {
  alert('Set your REACT_APP_DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle React SDK.')
}

function App() {
  /**
   * The useIsDevCycleInitialized hook will return true when the DevCycle client
   * has finished initializing. Before the client has initialized, all variables
   * will return the default values.
   */
  const devcycleReady = useIsDevCycleInitialized();

  const appContent = devcycleReady
    ? (
        <>
          <ToggleBot />
          <User />
        </>
      )
    : <h2>Loading...</h2>

  return (
    <div className="App">
      {appContent}
      <div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://docs.devcycle.com/sdk/client-side-sdks/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevCycle React SDK Docs
        </a>
      </div>
    </div>
  );
}

/**
 * Wrapping your app with the DevCycle provider will make the client
 * available to all child components.
 * See the documentation for more information:
 * https://docs.devcycle.com/sdk/client-side-sdks/react/react-gettingstarted#provider-config
 */
export default withDevCycleProvider({
  sdkKey: process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY,
  user: users[0], // initialize with user-1
  options: {
    logLevel: 'debug',
    // This is added for demo purposes. The default 10s is sufficent for most apps
    eventFlushIntervalMS: 1000
  }
})(App);
