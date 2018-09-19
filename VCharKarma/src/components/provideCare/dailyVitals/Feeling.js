import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import GridView from 'react-native-super-grid';


const Feeling = ({ onPress, text, _buttonPressHandler1 }) => {
    const feeling = 'Happy';
    return (
        <View style={styles.modalContent}> 
            <Text style={{fontSize: 22}}> How are you feeling? </Text> 
            <View style={{flexDirection: 'row', justifyContent: 'center', marginLeft: 30, marginRight: 30, marginTop: 30 }}>
                <View style={{flex:1}}>
                <TouchableOpacity onPress={onPress}>
                    <Image style={{width: 50, height: 50}} 
                            source={require('../../../../img/happy.jpg')}/>
                    <Text> {feeling} </Text>
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={onPress}>
                    <Image style={{width: 50, height: 50}} 
                            source={require('../../../../img/sad.jpg')}/>
                    <Text> Sad </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center',  marginLeft: 30, marginRight: 30, marginTop: 30}}>
                <View style={{flex:1, }}>
                <TouchableOpacity onPress={onPress}>
                    <Image style={{width: 50, height: 50}} 
                            source={require('../../../../img/tired.jpg')}/>
                    <Text> Tired </Text>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={onPress}>
                    <Image style={{width: 50, height: 50}} 
                            source={require('../../../../img/sick.jpg')}/>
                    <Text> Sick </Text>
                    </TouchableOpacity>
                </View>
                
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