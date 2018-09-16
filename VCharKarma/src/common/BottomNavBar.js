import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';
import ConsentPage from '../components/ConsentPage';
import HomePage from '../components/UserProfilePage';
// import ConsentPage from '../components/ConsentPage';
import { RootNavigator } from '../navigators/AppNavigator'

const BottomNavBar = createBottomTabNavigator(
    {
        Home: { screen: HomePage },
    //   Settings: ConsentPage,
     
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
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

  export { BottomNavBar };