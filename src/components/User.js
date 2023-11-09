import { useDevCycleClient, useVariableValue } from '@devcycle/react-client-sdk';

function User() {
  const devcycleClient = useDevCycleClient()
  const greeting = useVariableValue('greeting', 'Hello world!')

  const newUser = {
    user_id: 'user2',
    email: 'new_user@email.com'
  }

  return (
    <div className="App-user">
      <p>{greeting}</p>
      <p>Current user: <b>{devcycleClient.user?.email || 'Anonymous User'}</b></p>

      <div className="App-buttons">
        <button
          className="App-button"
          onClick={() => devcycleClient.identifyUser(newUser)}
        >
          Identify User
        </button>
        <button
          className="App-button"
          onClick={() => devcycleClient.resetUser()}
        >
          Reset User
        </button>
      </div>
    </div>
  );
}

export default User;
