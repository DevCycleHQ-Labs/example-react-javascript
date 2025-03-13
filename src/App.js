import './App.css';
import { useIsDevCycleInitialized, withDevCycleProvider } from '@devcycle/react-client-sdk';
import ToggleBot from './components/ToggleBot';
import Description from './components/Description';

const query = new URLSearchParams(window.location.search);
const querySdkKey = query.get('devcycle_sdk_key');
const hideBackground = query.get('hide_background') === 'true';

if (!querySdkKey && !process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY) {
  alert('Set your REACT_APP_DEVCYCLE_CLIENT_SDK_KEY environment variable to use the DevCycle React SDK.')
}

const devcycleSdkKey = querySdkKey || process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY;

function App() {
  /**
   * The useIsDevCycleInitialized hook will return true when the DevCycle client
   * has finished initializing. Before the client has initialized, all variables
   * will return the default values.
   */
  const devcycleReady = useIsDevCycleInitialized();

  const appContent = devcycleReady
    ? (
        <div className="App-wrapper">
          <ToggleBot />
          <Description />
        </div>
      )
    : <h2>Initializing...</h2>

  return (
    <div className={`App ${!hideBackground ? 'gradient-background vertical-center' : ''}`}>
      {!hideBackground && <div className="App-header">
        <p>Demo Application</p>
        <img
          height="46"
          src="/devcycle-togglebot-full-colour.svg"
          alt="DevCycle"
        />
      </div>}
      {appContent}
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
  sdkKey: devcycleSdkKey,
  /**
   * Modify this user object to see how targeting is affected
   */
  user: {
    user_id: 'user123',
    name: 'Jane Doe',
    email: 'jane.doe@email.com'
  },
  options: {
    logLevel: 'debug',
    // Controls the interval between flushing events to the DevCycle servers
    eventFlushIntervalMS: 1000,
  }
})(App);
