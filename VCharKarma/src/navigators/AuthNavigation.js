import React from 'react';
import { SafeAreaView, ActivityIndicator, AsyncStorage, StatusBar, View, StyleSheet } from 'react-native';


class AuthNavigation extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
  
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(userToken ? 'HomeStack' : 'Auth');
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default AuthNavigation;