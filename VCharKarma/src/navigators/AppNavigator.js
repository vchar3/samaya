import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthNavigation from './AuthNavigation';
import LoginPage from '../components/LoginPage';
import UserProfilePage from '../components/UserProfilePage';
import HomePage from '../components/HomePage';
import ProvideCarePage from '../components/ProvideCarePage';
import MedicationsPage from '../components/MedicationsPage';
import HealthRecordsPage from '../components/HealthRecordsPage';
import InsurancePage from '../components/InsurancePage';
import ConsentPage from '../components/ConsentPage';
import LegalPage from '../components/LegalPage';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator(
    {
        Home: { screen: HomePage },
        Profile: { screen: UserProfilePage },
        ProvideCare: {screen: ProvideCarePage},
        Medications: { screen: MedicationsPage },
        HealthRecords: {screen: HealthRecordsPage},
        Insurance: {screen: InsurancePage},
        Consent: {screen: ConsentPage},
        Legal: {screen: LegalPage},

    }
);

const AuthNavigator = createStackNavigator(
    {
        Login: { screen: LoginPage }
    }
);

const BottomBarStack = createStackNavigator(
    {
        Home: { screen: HomePage },
        Profile: { screen: UserProfilePage },
        ProvideCare: {screen: ProvideCarePage}

    }
);

const BottomTabBar = createBottomTabNavigator(
    {
      Home: { screen: RootNavigator },
      Profile: { screen: UserProfilePage },
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Profile') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );


const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthNavigation,
        App: BottomTabBar,
        Auth: AuthNavigator

    },
    {
        initialRouteName: 'AuthLoading'
    },
    
);

const AppWithNavigationState = reduxifyNavigator(SwitchNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {SwitchNavigator, RootNavigator, AppNavigator, middleware , BottomTabBar};