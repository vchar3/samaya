import React from 'react';
import {Image, Text, View, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements'


const BloodPressure = ({ self }) => {
    return ( 
        <View style={styles.modalContent}> 
                <View style={styles.sliderContainer}>
                    <View style={styles.sliderContain}>
                        <Text style={styles.sliderChangeValue}>{self.state.sysValue}</Text>
                       
                        <Slider
                            style={styles.sliderStyle}
                            thumbTintColor={'#7DBADF'}
                            minimumTrackTintColor={'#7DBADF'}
                            maximumTrackTintColor={'#d7e8ef'}
                            value={self.state.sysValue}
                            minimumValue={self.state.bloodPressure.sys.minimumValue}
                            maximumValue={self.state.bloodPressure.sys.maximumValue}
                            step={self.state.bloodPressure.sys.step}
                            onValueChange={(changeValue) => { self.setState({ sysValue: changeValue})} } />
                       
                        <Text style={styles.sliderTitle}>{'SYS'} </Text>
                        
                    </View>

                    <View style={styles.sliderContain}>
                        <Text style={styles.sliderChangeValue}>{self.state.diaValue}</Text>                    
                        <Slider
                            style={styles.sliderStyle}
                            thumbTintColor={'#7DBADF'}
                            minimumTrackTintColor={'#7DBADF'}
                            maximumTrackTintColor={'#d7e8ef'}
                            value={self.state.diaValue}
                            minimumValue={self.state.bloodPressure.dia.diaMinimumValue}
                            maximumValue={self.state.bloodPressure.dia.diaMaximumValue}
                            step={self.state.bloodPressure.dia.diaStep}
                            onValueChange={(changeValue) => {self.setState({diaValue: changeValue})}} />
                        <Text style={styles.sliderTitle}>{'DIA'} </Text>
                    </View>

                    <View style={styles.sliderContain}>
                    <Text style={styles.sliderChangeValue}>{self.state.bpmValue}</Text>                    
                        <Slider
                            style={styles.sliderStyle}
                            thumbTintColor={'#7DBADF'}
                            minimumTrackTintColor={'#7DBADF'}
                            maximumTrackTintColor={'#d7e8ef'}
                            value={self.state.bpmValue}
                            minimumValue={self.state.bloodPressure.bpm.bpmMinimumValue}
                            maximumValue={self.state.bloodPressure.bpm.bpmMaximumValue}
                            step={self.state.bloodPressure.bpm.bpmStep}
                            onValueChange={(changeValue) => {self.setState({bpmValue: changeValue})}} />
                        <Text style={styles.sliderTitle}>{'BPM'} </Text>
                    </View>
                </View>
        </View>
     
    );
};

const styles = {
    modalContent: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      button: {
        backgroundColor: 'lightblue',
        width: 200,
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
      sliderContainer: {     
        alignItems: 'stretch',

        justifyContent: 'center',
        textAlign: 'center',
      },
      sliderContain: {
        //flexDirection:'row', 
        textAlign: 'center',
        paddingTop: 20,
      },
      sliderStyle: {
        width: 270
      },
      sliderTitleText: {
          fontSize: 14
      },
      sliderChangeValue: {
        fontSize: 24, 
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#7DBADF' 
      },
      titleStyle: {
        fontSize: 24, 
        color: '#0c9ef7' 
      },
      sliderTitle: {
          fontSize: 14,
          color: '#7DBADF'
      }
};



export {BloodPressure};