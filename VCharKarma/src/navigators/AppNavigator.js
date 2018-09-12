import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

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
        Login: { screen: LoginPage },
        Home: { screen: HomePage },
        Profile: { screen: UserProfilePage },
        ProvideCare: {screen: ProvideCarePage},
        Medications: { screen: MedicationsPage },
        HealthRecords: {screen: HealthRecordsPage},
        Insurance: {screen: InsurancePage},
        Consent: {screen: ConsentPage},
        Legal: {screen: LegalPage},

    },
    {
        initialRouteName: 'Login',
    }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };