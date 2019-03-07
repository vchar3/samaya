import React from 'react';
import { View, Text } from 'react-native';
import OtherAccountPage from '../components/OtherAccountPage';

const headerBar = (headerTitle) => {
  return {           
    title: headerTitle,
    headerStyle: {
        backgroundColor: '#0077B5',
        borderBottomColor: '#fff',
        
    },
    headerTintColor: "#ffff",
    headerTitleStyle: {
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
    },
    headerRight: (<OtherAccountPage />)
  }
};

const headerBarWithOutAccount = (headerTitle) => {
  return {           
    title: headerTitle,
    headerStyle: {
        backgroundColor: '#0077B5',
        borderBottomColor: '#fff',
        
    },
    headerTintColor: "#ffff",
    headerTitleStyle: {
        fontSize: 24,
        alignSelf: 'center',
        textAlign: 'center',
    }
  }
};



const styles = {
    container: {
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative',
      marginBottom: 50
    },
    textStyle: {
      fontSize: 20
    }
  };

  export { headerBar, headerBarWithOutAccount };
