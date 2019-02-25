import { NavigationActions } from 'react-navigation';
import {SwitchNavigator } from '../../src/navigators/AppNavigator';

const secondAction = SwitchNavigator.router.getActionForPathAndParams('AuthLoading');
const initialNavState = SwitchNavigator.router.getStateForAction( secondAction );

export default function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = SwitchNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'HomeStack' }),
        state
      );
      break;
    case 'Logout':
      nextState = SwitchNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = SwitchNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}