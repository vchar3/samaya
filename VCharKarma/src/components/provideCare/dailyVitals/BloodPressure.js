import React from 'react';
import {Image, Text, View, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements'


const BloodPressure = ({ onPress, text, _changeSysBloodPressure, _changeDiaBloodPressure, state}) => {
    return (
        <View style={styles.modalContent}> 
            <Text style={{fontSize: 24}}> Blood Pressure </Text> 

                <Image 
                    style={{width: 50, height: 50}} 
                    source={require('../../../../img/heart.png')}
                />

                <View style={styles.sliderContainer}>
                    <View style={styles.sliderContain}>
                        <Text style={{justifyContent:'flex-start'}}>{`SYS \nmmHg`} </Text>
                        <View style={styles.sliderStyle}>
                        <Slider
                            value={state.sysValue}
                            minimumValue={state.bloodPressure.sys.minimumValue}
                            maximumValue={state.bloodPressure.sys.maximumValue}
                            step={state.bloodPressure.sys.step}
                            onValueChange={(changeValue) => _changeSysBloodPressure(changeValue)} />
                        </View>
                        <Text style={{fontSize: 24}}>{state.sysValue}</Text>
                    </View>

                    <View style={styles.sliderContain}>
                        <Text>{`PULSE \nmin`} </Text>
                        <View style={styles.sliderStyle}>
                            <Slider
                                value={state.diaValue}
                                minimumValue={state.bloodPressure.dia.diaMinimumValue}
                                maximumValue={state.bloodPressure.dia.diaMaximumValue}
                                step={state.bloodPressure.dia.diaStep}
                                onValueChange={(changeValue) => _changeDiaBloodPressure(changeValue)} />
                        </View>
                        <Text style={{fontSize: 24}}>{state.diaValue}</Text>
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
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 30,
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
      sliderContainer: {     
        alignItems: 'stretch'
      },
      sliderContain: {
        flexDirection:'row', 
        paddingTop: 20 
      },
      sliderStyle: {
        width: 200, 
        paddingLeft: 15, 
        paddingRight: 15
      }
};



export {BloodPressure};