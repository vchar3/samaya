import React from 'react';
import { Text, View } from 'react-native';
import FlipToggle from 'react-native-flip-toggle-button'
import { material } from 'react-native-typography'

const ToggleSlider = ({ textLabel, isActive, toggleSwitchHandler, toggleLongPressHandler, textStyle }) => {
    return (
        <View style={styles.container}>
                <View  style={styles.textContainer}> 
                    <Text style={[styles.textStyle, textStyle]}>{textLabel}</Text>
                </View>
                <View style={styles.sliderContainer}>
                    <FlipToggle
                        value={isActive}
                        buttonWidth={50}
                        buttonHeight={23}
                        buttonRadius={30}
                        sliderWidth={20}
                        sliderHeight={20}
                        sliderRadius={50}
                        // onLabel={'On'}
                        // offLabel={'Off'}
                        //labelStyle={{color: 'black' }}
                        buttonOnColor={'#0077B5'}
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
        flexDirection: 'row', 
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 7.5, 
        marginTop: 7.5,

    },
    textContainer: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    textStyle: {
        fontSize: 16,
        color: '#0077B5'

    },
    sliderContainer: { 
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
  };

export { ToggleSlider };
