import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';
import moment from 'moment';
import feelingChanges from './FeelingChanges';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';

class FeelingPage extends Component { 
    static navigationOptions = {
        title: 'Feeling',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#fff'
        },
        headerTitleStyle: {
            fontSize: 24
        },
        headerTintColor: "#ffff"
    };

    state = {
        feeling: {
            isHappy: false,
            isSad: false,
            isTired: false,
            isSick: false,
            dateTime:''
        },
    }
    
    render() {
        return (
            <View style={styles.modalContent}> 
                <View style={{ justifyContent: 'space-between',  marginTop: 30, width: 270 }}>
                    <CheckBox
                        title='Happy'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF'}}
                        checked = {state.feeling.isHappy}
                        onPress={(value)=> feelingChanges('Happy', value, this)}                  
                    />

                    <CheckBox
                        title='Sad'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF'}}
                        checked = {state.feeling.isSad}
                        onPress={(value)=> feelingChanges('Sad', value, this)}                  
                    />

                    <CheckBox
                        title='Tired'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF'}}
                        checked = {state.feeling.isTired}
                        onPress={(value)=> feelingChanges('Tired', value, this)}                  
                    />

                    <CheckBox
                        title='Sick'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF'}}
                        checked = {state.feeling.isSick}
                        onPress={(value)=> feelingChanges('Sick', value, this)}                  
                    />

                </View>
            </View>
        );
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps) (FeelingPage);

const styles = {
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      button: {
        backgroundColor: 'lightblue',
        width: 200,
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      buttonTextStyle: {
        fontWeight:'bold', 
        color: 'white', 
        fontSize: 24
      },
};