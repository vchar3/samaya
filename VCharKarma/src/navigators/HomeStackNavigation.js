import React from 'react';
import { PageLayout } from '../common/index';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProvideCareStackRoute} from './ProvideCareStackNavigation';

import HomePage from '../components/HomePage';
import UserProfilePage from '../components/UserProfilePage';
import ProvideCarePage from '../components/ProvideCarePage';
import MedicationsPage from '../components/MedicationsPage';
import HealthRecordsPage from '../components/HealthRecordsPage';
import InsurancePage from '../components/InsurancePage';
import ConsentPage from '../components/ConsentPage';
import LegalPage from '../components/LegalPage';
import CareNotesPage from '../components/CareNotesPage';
import SettingPage from '../components/SettingPage';

import DailyVitalsPage from '../components/provideCare/dailyVitals/DailyVitalsPage';
import HomeCarePage from '../components/provideCare/HomeCarePage';
import MealPlanPage from '../components/provideCare/MealPlanPage';
import MedicationPage from '../components/provideCare/MedicationPage';



const HomeNavigator = createStackNavigator(
    {
        Home: { screen: HomePage },
        ProvideCare: {screen: ProvideCarePage},
        Medications: { screen: MedicationsPage },
        HealthRecords: {screen: HealthRecordsPage},
        Insurance: {screen: InsurancePage},
        Consent: {screen: ConsentPage},
        Legal: {screen: LegalPage},
        CareNote: {screen: CareNotesPage},

        DailyVital: { screen: DailyVitalsPage },
        HomeCare: {screen: HomeCarePage},
        MealPlan: { screen: MealPlanPage },
        Medication: {screen: MedicationPage},
        // ProvideCareStack: ProvideCareStackRoute
        

    }
);

const SettingNavigator = createStackNavigator(
  {
    SettingPage: { screen: SettingPage}
  }
);

const DrawNavigator = createDrawerNavigator(
  {
    Home: { 
      screen: HomeNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => {
          return <Ionicons name='ios-home' size={25} color={tintColor} />
        }
      } 
    }
  }
);

const TopTabBarNavigator = createMaterialTopTabNavigator(
    {
      Home: { 
        screen: HomeNavigator,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => {
            return <Ionicons name='ios-home' size={25} color={tintColor} />
          }
        } 
      },
      Profile: { 
        screen: UserProfilePage,
        navigationOptions: {
          tabBarLabel: 'Profile',
          tabBarIcon: ({ tintColor }) => {
            return <Ionicons name='ios-add-circle' size={25} color={tintColor} />
          }
        }  
      },
      Setting: { 
        screen: SettingNavigator,
        navigationOptions: {
          tabBarLabel: 'Setting',
          tabBarIcon: ({ tintColor }) => {
            return <Ionicons name='ios-list' size={25} color={tintColor} />
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