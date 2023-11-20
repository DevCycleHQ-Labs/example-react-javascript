import { useVariableValue } from '@devcycle/react-client-sdk';
import togglebot from '../togglebot.png';
import togglebotWink from '../togglebot-wink.png';
import classNames from 'classnames';

function ToggleBot() {
  /**
   * The useVariableValue hook will return the current value of a variable.
   * If no value is defined for the current user, the default value will be returned.
   */
  const shouldWink = useVariableValue('togglebot-wink', false)
  const spinSpeed = useVariableValue('togglebot-speed', 'off')

  return (
    <img
      src={shouldWink ? togglebotWink : togglebot}
      className={classNames(['App-logo', `spin-${spinSpeed}`])}
      alt="togglebot"
    />
  );
}

export default ToggleBot;
