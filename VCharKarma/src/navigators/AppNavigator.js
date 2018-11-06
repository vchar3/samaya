import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import Icon from 'react-native-vector-icons/Ionicons';

import AuthNavigation from './AuthNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import {ProvideCareStackRoute, ProvideCareStackNavigation} from './ProvideCareStackNavigation';
import LoginPage from '../components/LoginPage';
import UserProfilePage from '../components/UserProfilePage';
import EmailPage from '../components/newAccount/EmailPage';



const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AuthNavigator = createStackNavigator(
    {
        Login: { screen: LoginPage },
        Email: {screen: EmailPage},
        Profile: {screen: UserProfilePage}
    }
);

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthNavigation,
        Auth: AuthNavigator,
        HomeStack: HomeStackNavigation,
        ProvideCareStack: ProvideCareStackNavigation
    },
    {
        initialRouteName: 'AuthLoading'
    }  
);

const AppWithNavigationState = reduxifyNavigator(SwitchNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {SwitchNavigator, AppNavigator, middleware};


// const BottomTabBar = createBottomTabNavigator(
//     {
//       // Home: { screen: RootNavigator },
//       Profile: { screen: UserProfilePage },
//     },
//     {
//       navigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) => {
//           const { routeName } = navigation.state;
//           let iconName;
//           if (routeName === 'Home') {
//             iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//           } else if (routeName === 'Profile') {
//             iconName = `ios-options${focused ? '' : '-outline'}`;
//           }
  
//           // You can return any component that you like here! We usually use an
//           // icon component from react-native-vector-icons
//           return <Ionicons name={iconName} size={25} color={tintColor} />;
//         },
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   );