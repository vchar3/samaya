import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';

const BathPage = ({self, onPress}) => {
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize:24, paddingTop: 20}}>
                Bath
            </Text>
           
                <ToggleSlider 
                    textLabel = 'Did you take a bath'
                    toggleSwitchHandler= {(value) => self.setState({
                        bath: {
                            ...self.state.bath,
                            isBathTaken :value
                        } 
                    })}
                    isActive = {self.state.bath.isBathTaken}
                />

                <ToggleSlider 
                    textLabel = 'Needed Assistance'
                    toggleSwitchHandler= {(value) =>self.setState({
                        bath: {
                            ...self.state.bath,
                            isAssistanceNeeded :value 
                        }
                    })}
                    isActive = {self.state.bath.isAssistanceNeeded}
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
      }
}


export { BathPage };