import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';

const OtherVitalsPage = ({self, onPress}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                <Text style={{fontSize:18, width: 150}}>
                    Body Temp   
                </Text>
                <TextInput 
                    value={self.state.otherVitals.temp}
                    style={styles.inputStyle}
                    onChangeText={ (value) => self.setState({ 
                        otherVitals: {
                            ...self.state.otherVitals,
                            temp :value
                        }  
                    })}
                />
                <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                {self.state.otherVitals.temp}
                </Text>
            </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                <Text style={{ fontSize:18, width: 150}}>
                    Respiratory Rate
                </Text>
                <TextInput 
                    value={self.state.otherVitals.respiratory}
                    style={styles.inputStyle}
                    onChangeText={ (value) => self.setState({ 
                        otherVitals: {
                            ...self.state.otherVitals,
                            respiratory :value
                        }  
                    })}
                />
                <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                {self.state.otherVitals.respiratory}
                </Text>
            </View>

                        <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                <Text style={{fontSize:18, width: 150}}>
                    Pulse Oxygen
                </Text>
                <TextInput 
                    value={self.state.otherVitals.pulse}
                    style={styles.inputStyle}
                    onChangeText={ (value) => self.setState({ 
                        otherVitals: {
                            ...self.state.otherVitals,
                            pulse :value
                        }  
                    })}
                />
                <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                {self.state.otherVitals.pulse}
                </Text>
            </View>
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
        fontSize: 18, 
        borderWidth: 1,
        width: 60
    },
}


export { OtherVitalsPage };