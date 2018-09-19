import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import GridView from 'react-native-super-grid';
import { TextField } from 'react-native-material-textfield';


const BloodPressure = ({ onPress, text, _buttonPressHandler1, sys, dia , pulse}) => {
    return (
        <View style={styles.modalContent}> 
            <Text style={{fontSize: 22}}> Blood Pressure </Text> 
            
                <TouchableOpacity onPress={onPress}>
                    <Image style={{width: 50, height: 50}} 
                            source={require('../../../../img/heart.png')}/>
                </TouchableOpacity>
                <View style={styles.textContainer}>  
                <TextField
                    label='SYS mmHg'
                    value={sys}
                    onChangeText={ (value) => {sys:value} }
                />

                <TextField
                    label='DIA mmHg'
                    value={dia}
                    onChangeText={ (value) => {dia:value} }
                />

                <TextField
                    label='PULSE /min'
                    value={pulse}
                    onChangeText={ (value) => {pulse:value} }
                />

            </View>


            <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>Add</Text>
            </View>
            </TouchableOpacity>

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
      textContainer: {     
        width: 200
      },
      touchable: {
        padding: 0,
         marginLeft: 0
      }
};



export {BloodPressure};