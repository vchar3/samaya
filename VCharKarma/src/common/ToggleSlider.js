import React from 'react';
import { Text, View } from 'react-native';
import FlipToggle from 'react-native-flip-toggle-button'

const ToggleSlider = ({ textLabel, isActive, toggleSwitchHandler, toggleLongPressHandler }) => {
    return (
        <View style={styles.container}>
                <View  style={styles.textContainer}> 
                    <Text style={styles.textStyle}>{textLabel}</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <FlipToggle
                        value={isActive}
                        buttonWidth={70}
                        buttonHeight={23}
                        buttonRadius={30}
                        sliderWidth={20}
                        sliderHeight={20}
                        sliderRadius={50}
                        onLabel={'On'}
                        offLabel={'Off'}
                        labelStyle={{color: 'black' }}
                        buttonOnColor={'green'}
                        buttonOffColor={'grey'}
                        sliderOnColor= {'white'}
                        sliderOffColor={ 'white'}
                        onToggle={(newState) =>{ toggleSwitchHandler(newState) }}
                        onToggleLongPress={(newState) => { toggleLongPressHandler(newState)}}
                    />
                </View>
        </View>
    );
};
const styles = {
    container: {     
        flex: 0.1,
        flexDirection: 'row', 
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 7.5, 
        marginTop: 7.5 
    },
    textContainer: {
        flex:0.5,
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 16,

    },
    sliderContainer: {
        flex:0.5,  
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
  };

export { ToggleSlider };
