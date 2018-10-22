import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';

const CareCircleModel = ({self, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:24, paddingTop: 20}}>
                Add User
            </Text>

            <TextInput 
                value={self.state.name}
                placeholder='Full Name'
                style={styles.inputStyle}
                onChangeText={ (name) => self.setState({ name: name })}
            />
            <TextInput 
                keyboardType= 'email-address'
                autoCapitalize = {false}
                value={self.state.email}
                placeholder='Email'
                style={styles.inputStyle}
                onChangeText={ (email) => self.setState({ email: email })}
            />

            <TextInput 
                value={self.state.relation}
                placeholder='Relationship'
                style={styles.inputStyle}
                onChangeText={ (relation) => self.setState({ relation: relation })}
            />

            <TextInput 
                value={self.state.status}
                placeholder='Status'
                style={styles.inputStyle}
                onChangeText={ (status) => self.setState({ status: status })}
            />

            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text>Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}; 

const styles = {
    container: {
        backgroundColor: 'white',
        padding: 20,
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
      inputStyle: { 
        padding: 5,
        fontSize:24, 
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
    },
}


export { CareCircleModel };