import React from 'react';
import { PageLayout } from '../common/index';
import { createStackNavigator, createMaterialTopTabNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ProvideCareStackRoute} from './ProvideCareStackNavigation';

import HomePage from '../components/HomePage';
import UserProfilePage from '../components/UserProfilePage';
import ProvideCarePage from '../components/ProvideCarePage';
import AppointmentsPage from '../components/AppointmentsPage';
import MedicationsPage from '../components/MedicationsPage';
import HealthRecordsPage from '../components/HealthRecordsPage';
import InsurancePage from '../components/InsurancePage';
import ConsentPage from '../components/ConsentPage';
import LegalPage from '../components/LegalPage';
import CareNotesPage from '../components/CareNotesPage';
import CareCirclePage from '../components/provideCare/CareCirclePage';
import SettingPage from '../components/SettingPage';
import ChatPage from '../components/ChatPage';
import PDFViwer from '../common/PDFViwer';

import DailyVitalsPage from '../components/provideCare/dailyVitals/DailyVitalsPage';
import HomeCarePage from '../components/provideCare/HomeCarePage';
import MealPlanPage from '../components/provideCare/MealPlanPage';
import MedicationPage from '../components/provideCare/MedicationPage';
import AddMedicationsPage from '../components/AddMedicationsPage';

import BathPage from '../components/provideCare/dailyVitals/BathPage';
import BloodPressurePage from '../components/provideCare/dailyVitals/BloodPressurePage';
import FallsPage from '../components/provideCare/dailyVitals/FallsPage';
import FeelingPage from '../components/provideCare/dailyVitals/FeelingPage';
import NutritionPage from '../components/provideCare/dailyVitals/NutritionPage';
import OtherVitalsPage from '../components/provideCare/dailyVitals/OtherVitalsPage';




const HomeNavigator = createStackNavigator(
    {
        Home: { screen: HomePage },
        ProvideCare: {screen: ProvideCarePage},
        Appointments: { screen: AppointmentsPage },
        Medications: { screen: MedicationsPage },
        HealthRecords: {screen: HealthRecordsPage},
        Insurance: {screen: InsurancePage},
        Consent: {screen: ConsentPage},
        Legal: {screen: ChatPage},
        CareNote: {screen: CareNotesPage},
        CareCircle: {screen: CareCirclePage},

        DailyVital: { screen: DailyVitalsPage },
        HomeCare: {screen: HomeCarePage},
        MealPlan: { screen: MealPlanPage },
        Medication: {screen: MedicationPage},
        AddMedications: {screen: AddMedicationsPage},

        Bath: {screen: BathPage},
        BloodPressure: {screen: BloodPressurePage},
        Falls: {screen: FallsPage},
        Feeling: {screen: FeelingPage},
        Nutrition: {screen: NutritionPage},
        OtherVitals: {screen: OtherVitalsPage}

        // ProvideCareStack: ProvideCareStackRoute
        

    }
);

const SettingNavigator = createStackNavigator(
  {
    SettingPage: { screen: SettingPage},
    TermAndConditionPDF: {screen: PDFViwer},
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

const HomeStackNavigation = createMaterialTopTabNavigator(
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
       // screen: ({ navigation }) => <SettingPage navigation={navigation}/>,
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
      swipeEnabled: false,
      animationEnabled: true,
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

// class HomeStackNavigation extends React.Component {
//     render() {
//       return (
//         <PageLayout>
//             <TopTabBarNavigator />
//         </PageLayout>
//       );
//     }
// }

export default HomeStackNavigation;