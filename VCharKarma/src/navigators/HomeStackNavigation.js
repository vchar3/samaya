import React from 'react';
import { PageLayout } from '../common/index';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from '../components/HomePage';
import UserProfilePage from '../components/UserProfilePage';
import ProvideCarePage from '../components/ProvideCarePage';
import MedicationsPage from '../components/MedicationsPage';
import HealthRecordsPage from '../components/HealthRecordsPage';
import InsurancePage from '../components/InsurancePage';
import ConsentPage from '../components/ConsentPage';
import LegalPage from '../components/LegalPage';


const HomeNavigator = createStackNavigator(
    {
        Home: { screen: HomePage },
        ProvideCare: {screen: ProvideCarePage},
        Medications: { screen: MedicationsPage },
        HealthRecords: {screen: HealthRecordsPage},
        Insurance: {screen: InsurancePage},
        Consent: {screen: ConsentPage},
        Legal: {screen: LegalPage},

    }
);

const TopTabBarNavigator = createMaterialTopTabNavigator(
    {
      Home: { 
        screen: HomeNavigator,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => {
            <Ionicons name='ios-information-circle' size={25} color={tintColor} />
          }
        } 
      },
      Profile: { 
        screen: UserProfilePage,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => {
            <Ionicons name='ios-setting' size={25} color={tintColor} />
          }
        }  
      },
    },
    {
      initialRouteName: 'Home',
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'grey',
        style: {
          backgroundColor: '#f2f2f2',
          borderTopWidth: 0.5,
          borderTopColor: 'grey'
        },
        indicatorStyle: {
          height: 0
        },
        showIcon: true
      }
    }
  );

class HomeStackNavigation extends React.Component {
    render() {
      return (
        <PageLayout>
            <TopTabBarNavigator />
        </PageLayout>
      );
    }
}

export default HomeStackNavigation ;