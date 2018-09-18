import React from 'react';
import { PageLayout } from '../common/index';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProvideCarePage from '../components/ProvideCarePage'
import DailyVitalsPage from '../components/provideCare/dailyVitals/DailyVitalsPage';
import HomeCarePage from '../components/provideCare/HomeCarePage';
import MealPlanPage from '../components/provideCare/MealPlanPage';
import MedicationPage from '../components/provideCare/MedicationPage';




const ProvideCareStackRoute = createStackNavigator(
    {
        ProvideCare: {screen: ProvideCarePage},
        DailyVital: { screen: DailyVitalsPage },
        HomeCare: {screen: HomeCarePage},
        MealPlan: { screen: MealPlanPage },
        Medication: {screen: MedicationPage}

    }
);

const TopTabBarNavigator = createMaterialTopTabNavigator(
    {
      Home: { 
        screen: ProvideCareStackRoute,
        navigationOptions: {
          tabBarLabel: 'ProvideCare',
          tabBarIcon: ({ tintColor }) => {
            <Ionicons name='ios-information-circle' size={25} color={tintColor} />
          }
        } 
      },
      Profile: { 
        screen: HomeCarePage,
        navigationOptions: {
          tabBarLabel: 'HomeCare',
          tabBarIcon: ({ tintColor }) => {
            <Ionicons name='ios-setting' size={25} color={tintColor} />
          }
        }  
      },
    },
    {
    //   initialRouteName: 'DailyVital',
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

class ProvideCareStackNavigation extends React.Component {
    render() {
      return (
        <PageLayout>
            <TopTabBarNavigator />
        </PageLayout>
      );
    }
}

export  { ProvideCareStackRoute, ProvideCareStackNavigation} ;