import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';
import moment from 'moment';


const Feeling = ({ onPress, text, _buttonPressHandler1, _checkBoxChanges, state }) => {

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
                    onPress={(value)=> _checkBoxChanges('Happy', value)}                  
                />

                <CheckBox
                    title='Sad'
                    size= {30}
                    uncheckedColor={'white'}
                    textStyle= {{color: 'white', fontSize: 20}}
                    containerStyle= {{backgroundColor:'#7DBADF'}}
                    checked = {state.feeling.isSad}
                    onPress={(value)=> _checkBoxChanges('Sad', value)}                  
                />

                <CheckBox
                    title='Tired'
                    size= {30}
                    uncheckedColor={'white'}
                    textStyle= {{color: 'white', fontSize: 20}}
                    containerStyle= {{backgroundColor:'#7DBADF'}}
                    checked = {state.feeling.isTired}
                    onPress={(value)=> _checkBoxChanges('Tired', value)}                  
                />

                <CheckBox
                    title='Sick'
                    size= {30}
                    uncheckedColor={'white'}
                    textStyle= {{color: 'white', fontSize: 20}}
                    containerStyle= {{backgroundColor:'#7DBADF'}}
                    checked = {state.feeling.isSick}
                    onPress={(value)=> _checkBoxChanges('Sick', value)}                  
                />

            </View>
        </View>
    );
};

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



export {Feeling};