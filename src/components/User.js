import { useRef } from 'react';
import { useDevCycleClient, useVariableValue } from '@devcycle/react-client-sdk';
import users from '../data/users'

function User() {
  const ref = useRef(null)
  const devcycleClient = useDevCycleClient()
  const greeting = useVariableValue('togglebot-greeting', 'Hello world!')

  /**
   * Identifying a new user object will retreive new variable values
   */
  async function identifyUser(changeEvent) {
    const userObject = JSON.parse(changeEvent.target.value)
    await devcycleClient.identifyUser(userObject)
  }

  /**
   * Resetting the user will clear the user's identity and retreive new variable values
   */
  async function resetUser() {
    await devcycleClient.resetUser()
    ref.current.value = '{}'
  }

  return (
    <div className="App-user">
      <h3>{greeting}</h3>

      <div className="App-buttons">
        <select onChange={identifyUser} className="App-button" ref={ref}>
          {users.map(user => (
            <option key={user.user_id} value={JSON.stringify(user)}>{user.name}</option>
          ))}
          <option key="anonymous" value="{}">Anonymous User</option>
        </select>

        <button
          className="App-button"
          onClick={resetUser}
        >
          Reset User
        </button>
      </div>
    </div>
  );
}

export default User;
