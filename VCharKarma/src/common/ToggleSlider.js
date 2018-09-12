import React from 'react';
import { Text, View } from 'react-native';
import FlipToggle from 'react-native-flip-toggle-button'

const ToggleSlider = ({ textLabel, isActive, _toggleSwitchHandler, _toggleLongPressHandler }) => {
    return (
        <View style={styles.container}>
                <View  style={styles.textContainer}> 
                    <Text style={styles.textStyle}>{textLabel}</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <FlipToggle
                        value={isActive}
                        buttonWidth={100}
                        buttonHeight={33}
                        buttonRadius={30}
                        sliderWidth={30}
                        sliderHeight={30}
                        sliderRadius={50}
                        onLabel={'On'}
                        offLabel={'Off'}
                        labelStyle={{color: 'black' }}
                        buttonOnColor={'green'}
                        buttonOffColor={'grey'}
                        sliderOnColor= {'white'}
                        sliderOffColor={ 'white'}
                        onToggle={(newState) =>{ _toggleSwitchHandler(newState) }}
                        onToggleLongPress={(newState) => { _toggleLongPressHandler(newState)}}
                    />
                </View>
        </View>
    );
};
const styles = {
    container: {     
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: 'green',
        margin: 30
    },
    textContainer: {
        flex:1,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 14,

    },
    sliderContainer: {
        flex:1,  
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
  };

export { ToggleSlider };
