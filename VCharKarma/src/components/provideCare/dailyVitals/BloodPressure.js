import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';

class BloodPressure extends Component { 
    static navigationOptions = {
        title: 'Blood Pressure',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#fff'
        },
        headerTitleStyle: {
            fontSize: 24
        },
        headerTintColor: "#ffff"
      };

    state = { 
        sysValue: 100,
        diaValue: 80,
        bpmValue:74,
        bloodPressure: {
            sys:{ 
                minimumValue: 90,
                maximumValue: 160,
                step: 1
            },
            dia: { 
                diaMinimumValue: 60,
                diaMaximumValue: 90,
                diaStep: 1
            },
            bpm: { 
                bpmMinimumValue: 40,
                bpmMaximumValue: 240,
                bpmStep: 1
            },
            dateTime:''
        },
    }

    render() {
        return ( 
            <View style={styles.modalContent}> 
                    <View style={styles.sliderContainer}>
                        <View style={styles.sliderContain}>
                            <Text style={styles.sliderChangeValue}>{this.state.sysValue}</Text>
                        
                            <Slider
                                style={styles.sliderStyle}
                                thumbTintColor={'#7DBADF'}
                                minimumTrackTintColor={'#7DBADF'}
                                maximumTrackTintColor={'#d7e8ef'}
                                value={this.state.sysValue}
                                minimumValue={this.state.bloodPressure.sys.minimumValue}
                                maximumValue={this.state.bloodPressure.sys.maximumValue}
                                step={this.state.bloodPressure.sys.step}
                                onValueChange={(changeValue) => { this.setState({ sysValue: changeValue, dateTime: moment(new Date()).format("LT") })} } />
                        
                            <Text style={styles.sliderTitle}>{'SYS'} </Text>
                            
                        </View>

                        <View style={styles.sliderContain}>
                            <Text style={styles.sliderChangeValue}>{this.state.diaValue}</Text>                    
                            <Slider
                                style={styles.sliderStyle}
                                thumbTintColor={'#7DBADF'}
                                minimumTrackTintColor={'#7DBADF'}
                                maximumTrackTintColor={'#d7e8ef'}
                                value={this.state.diaValue}
                                minimumValue={this.state.bloodPressure.dia.diaMinimumValue}
                                maximumValue={this.state.bloodPressure.dia.diaMaximumValue}
                                step={this.state.bloodPressure.dia.diaStep}
                                onValueChange={(changeValue) => {this.setState({diaValue: changeValue, dateTime: moment(new Date()).format("LT") })}} />
                            <Text style={styles.sliderTitle}>{'DIA'} </Text>
                        </View>

                        <View style={styles.sliderContain}>
                        <Text style={styles.sliderChangeValue}>{this.state.bpmValue}</Text>                    
                            <Slider
                                style={styles.sliderStyle}
                                thumbTintColor={'#7DBADF'}
                                minimumTrackTintColor={'#7DBADF'}
                                maximumTrackTintColor={'#d7e8ef'}
                                value={this.state.bpmValue}
                                minimumValue={this.state.bloodPressure.bpm.bpmMinimumValue}
                                maximumValue={this.state.bloodPressure.bpm.bpmMaximumValue}
                                step={this.state.bloodPressure.bpm.bpmStep}
                                onValueChange={(changeValue) => {this.setState({bpmValue: changeValue, dateTime: moment(new Date()).format("LT") })}} />
                            <Text style={styles.sliderTitle}>{'BPM'} </Text>
                        </View>
                    </View>
            </View>
        
        );
    }
};

function mapStateToProps(state) {
    return {
      user: state.userReducer
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        getUser: (username, password) => dispatch(getUserLogin(username, password))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (BloodPressure);

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
