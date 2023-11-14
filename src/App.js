import './App.css';
import { useIsDevCycleInitialized, withDevCycleProvider } from '@devcycle/react-client-sdk';
import Logo from './components/Logo';
import User from './components/User';

function App() {
  const devcycleReady = useIsDevCycleInitialized();

  const appContent = devcycleReady
    ? (
        <>
          <Logo />
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
          DevCycle SDK Docs
        </a>
      </div>
    </div>
  );
}

export default withDevCycleProvider({
  sdkKey: process.env.REACT_APP_DEVCYCLE_CLIENT_SDK_KEY,
  user: {
    user_id: 'user1',
    email: 'initial_user@email.com'
  },
  options: { logLevel: 'debug' }
})(App);
