import { useVariableValue } from '@devcycle/react-client-sdk';
import logo from '../logo.png';
import classNames from 'classnames';

function Logo() {
  const shouldSpin = useVariableValue('spin-logo', false)

  return (
    <img
    src={logo}
    className={classNames(['App-logo', shouldSpin && 'spin'])}
    alt="logo"
  />
  );
}

export default Logo;
