import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import GridView from 'react-native-super-grid';
import { CheckBox } from 'react-native-elements'


const Feeling = ({ onPress, text, _buttonPressHandler1, _checkBoxChanges, state }) => {

    return (
        <View style={styles.modalContent}> 
            <Text style={{fontSize: 22}}> How are you feeling? </Text> 
            <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginTop: 30 }}>
                <CheckBox
                    title='Happy'
                    checked = {state.feeling.isHappy}
                    onPress={(value)=> _checkBoxChanges('Happy', value)}                  
                />

                <CheckBox
                    title='Sad'
                    checked = {state.feeling.isSad}
                    onPress={(value)=> _checkBoxChanges('Sad', value)}                  
                />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginTop: 30 }}>
                <CheckBox
                    title='Tired'
                    checked = {state.feeling.isTired}
                    onPress={(value)=> _checkBoxChanges('Tired', value)}                  
                />

                <CheckBox
                    title='Sick'
                    checked = {state.feeling.isSick}
                    onPress={(value)=> _checkBoxChanges('Sick', value)}                  
                />
            </View>
            <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    gridView: {
        paddingTop: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
    },
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
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
};



export {Feeling};