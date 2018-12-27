import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';

const BathPage = ({self, onPress}) => {
    return (
        <View style={styles.container}>
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
                            isAssistanceNeeded :value,
                            dateTime: moment(new Date()).format("LT") 
                        }
                    })}
                    isActive = {self.state.bath.isAssistanceNeeded}
                />
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