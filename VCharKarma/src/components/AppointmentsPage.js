import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';



class AppointmentsPage extends Component { 
    static navigationOptions = {
        title: 'Appointments',
      };

    state = { 

    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        this.props.navigation.dispatch({type: 'Login'});
    }
   
    render() {

        return (
            <View style={styles.container}>
                <Text> Comming Soon</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
      user: state.userReducer
    }
  }
  
function mapDispatchToProps(dispatch) {
return {
    getUser: (username, password) => dispatch(getUserLogin(username, password))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (AppointmentsPage);

const styles = {
    container: {     
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
  };
