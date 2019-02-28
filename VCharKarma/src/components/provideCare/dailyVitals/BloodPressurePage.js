import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Slider } from 'react-native-elements';
import { Graphs } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addBloodPressure } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

import { Button, CardSection} from '../../../common/index';

class BloodPressurePage extends Component { 
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
        userId: '',
        noteText: '', 
        sysValue: 100,
        diaValue: 80,
        bpmValue:74,
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
        }
    }

    constructor() {
        super(); 
        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userId: value
            });
        }) 
    }


    _buttonPressHandler() {
        let data = {
            id: 'BloodPressure',
            noteText: this.state.noteText, 
            sysValue: this.state.sysValue,
            diaValue: this.state.diaValue,
            bpmValue: this.state.bpmValue,
            sys:{ 
                minimumValue: this.state.sys.minimumValue,
                maximumValue: this.state.sys.maximumValue,
                step: this.state.sys.step
            },
            dia: { 
                diaMinimumValue: this.state.dia.diaMinimumValue,
                diaMaximumValue: this.state.dia.diaMaximumValue,
                diaStep: this.state.dia.diaStep
            },
            bpm: { 
                bpmMinimumValue: this.state.bpm.bpmMinimumValue,
                bpmMaximumValue: this.state.bpm.bpmMaximumValue,
                bpmStep: this.state.bpm.bpmStep
            },
            userId: this.state.userId
        };
        this.props.postBloodPressure(data);
        this.props.navigation.goBack();
    }

    render() {
        return ( 
            <View style={styles.modalContent}> 
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("LT")}
                </Text>   

                <View style={styles.sliderContain}>
                    <Text style={styles.sliderChangeValue}>{this.state.sysValue}</Text>
                    <Slider
                        style= {styles.sliderStyle}
                        thumbTintColor= {'#7DBADF'}
                        minimumTrackTintColor= {'#7DBADF'}
                        maximumTrackTintColor= {'#d7e8ef'}
                        value= {this.state.sysValue}
                        minimumValue= {this.state.sys.minimumValue}
                        maximumValue= {this.state.sys.maximumValue}
                        step= {this.state.sys.step}
                        onValueChange= {(changeValue) => { 
                                this.setState({ sysValue: changeValue })
                            } 
                        } 
                    />
                
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
                        minimumValue={this.state.dia.diaMinimumValue}
                        maximumValue={this.state.dia.diaMaximumValue}
                        step={this.state.dia.diaStep}
                        onValueChange={(changeValue) => {
                                this.setState({diaValue: changeValue})
                            }} 
                        />
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
                        minimumValue={this.state.bpm.bpmMinimumValue}
                        maximumValue={this.state.bpm.bpmMaximumValue}
                        step={this.state.bpm.bpmStep}
                        onValueChange={(changeValue) => {
                                this.setState({ bpmValue: changeValue })}
                            } 
                        />
                    <Text style={styles.sliderTitle}>{'BPM'} </Text>
                </View>

                <AutoGrowTextArea 
                    self= {this}
                />


                <CardSection>
                    <Button 
                        style={{backgroundColor:'#7DBADF'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                          <Text style={{color: '#fff'}}>Save</Text>
                    </Button>
                </CardSection>

                <Graphs 
                    uri= {'http://localhost:3000/api/graphs'}
                />

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
        postBloodPressure: (bloodPressureData) => dispatch(addBloodPressure(bloodPressureData))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (BloodPressurePage);

const styles = {
    modalContent: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    sliderContain: {
        textAlign: 'center',
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
    },
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
};
