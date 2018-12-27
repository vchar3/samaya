import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';

const Nutrition = ({self, onPress}) => {
    return (
        <View style={styles.container}>
                <ToggleSlider 
                    textLabel = 'Breakfast'
                    toggleSwitchHandler= {(value) => self.setState({
                        isBreakfastTaken :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {self.state.isBreakfastTaken}
                />

                <ToggleSlider 
                    textLabel = 'Lunch'
                    toggleSwitchHandler= {(value) => self.setState({
                        isLunchTaken :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {self.state.isLunchTaken}
                />

                <ToggleSlider 
                    textLabel = 'Dinner'
                    toggleSwitchHandler= {(value) => self.setState({
                        isDinnerTaken :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {self.state.isDinnerTaken}
                />

                <Text style={{fontSize:24, marginTop: 10}}>
                    What did you eat?
                </Text>
                <TextInput 
                    value={self.state.foodToday}
                    style={styles.inputStyle}
                    onChangeText={ (food) => self.setState({ foodToday: food, dateTime: moment(new Date()).format("LT")  })}
                />

                <ToggleSlider 
                    textLabel = 'Needed Assistance'
                    toggleSwitchHandler= {(value) =>self.setState({
                        isAssistanceNeeded :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {self.state.isAssistanceNeeded}
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
      },
      inputStyle: { 
        padding: 5,
        fontSize:24, 
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
    },
}


export { Nutrition };