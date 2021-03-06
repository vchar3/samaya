import React, {Component}  from 'react';
import {Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements';

const OtherAccountModel = ({ self }) => {
    return (
        <View style={styles.modalContent}>
            <Text style={styles.headerStyle}> Change Accounts </Text> 
            <ScrollView contentContainerStyle={styles.scrollStyle}> 
                { self.state.data ?
                    self.state.data.map((items) => (
                        <View key={items._id}> 
                            <TouchableOpacity onPress= { () => self.accountChange(items)}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.titleStyle}> {items.fullName} </Text>
                                    <Text style={styles.titleStyle}> {items.relationShip} </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                    : <Text style={{backgroundColor: 'red'}}> There is no authorized account </Text>
                }
             </ScrollView>
            <TouchableOpacity onPress= { () => self.setState({ visibleModal: false})}>
                <View style={styles.button}>
                    <Text style={styles.buttonTextStyle}>{'Close'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = { 

    modalContent: {
        backgroundColor: 'white',
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
    buttonTextStyle: {
        fontWeight:'bold', 
        color: 'white', 
        fontSize: 24
    },
    headerStyle: {
        fontSize: 24, 
        color: '#0c9ef7',
        textAlign: 'center',
        padding:15
    },
    titleStyle: {
        fontSize: 24, 
        color: 'green',
        textAlign: 'center',
        padding:15
    },
    scrollStyle: {
        height: 300
    }

};

export {OtherAccountModel};