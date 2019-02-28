import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, AsyncStorage } from 'react-native';
import { CheckBox, Slider } from 'react-native-elements';
import { Graphs } from '../../../common/index';
import moment from 'moment';
import feelingChanges from './FeelingChanges';
import {connect} from 'react-redux';
import { addFeeling } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

import { Button, CardSection} from '../../../common/index';

class FeelingPage extends Component { 
    static navigationOptions = {
        title: 'Feeling',
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
        sliderValue: 0,
        noteText: '',
        isGood: false,
        isFatigued: false,
        isTired: false,
        isSick: false
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
        let data  = {
            id: 'Mood',
            sliderValue: this.state.sliderValue,
            noteText: this.state.noteText,
            isGood: this.state.isGood,
            isFatigued: this.state.isFatigued,
            isTired: this.state.isTired,
            isSick: this.state.isSick,
            userId: this.state.userId
        };
        this.props.postFeeling(data);
        this.props.navigation.goBack();
    }
    
    render() {
        return (
            <View style={styles.modalContent}> 
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("LT")}
                </Text>  
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <CheckBox
                        title='Good'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF', width: 140}}
                        checked = {this.state.isGood}
                        onPress={(value)=> feelingChanges('Good', value, this)}                  
                    />

                    <CheckBox
                        title='Fatigued'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF', width: 140}}
                        checked = {this.state.isFatigued}
                        onPress={(value)=> feelingChanges('Fatigued', value, this)}                  
                    />
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <CheckBox
                        title='Tired'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF', width: 140}}
                        checked = {this.state.isTired}
                        onPress={(value)=> feelingChanges('Tired', value, this)}                  
                    />

                    <CheckBox
                        title='Sick'
                        size= {30}
                        uncheckedColor={'white'}
                        textStyle= {{color: 'white', fontSize: 20}}
                        containerStyle= {{backgroundColor:'#7DBADF', width: 140}}
                        checked = {this.state.isSick}
                        onPress={(value)=> feelingChanges('Sick', value, this)}                  
                    />

                </View>
                <View style={styles.sliderContainerStyle}>
                    <Text style={styles.sliderTextStyle}>How are you feeling on scale of 1 to 10?</Text>
                    <Slider
                        style={styles.sliderStyle}
                        value={this.state.sliderValue}
                        minimumValue={0}
                        maximumValue={10}
                        step={1}
                        minimumTrackTintColor={'green'}
                        maximumTrackTintColor={'red'}
                        thumbTintColor={'#7DBADF'}
                        thumbTouchSize={{width: 240, height: 100}}
                        onValueChange={(value) => this.setState({sliderValue: value})} 
                    />
                    <Text style={styles.sliderTextStyle}>{this.state.sliderValue}</Text>
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
        postFeeling: (feelingData) => dispatch(addFeeling(feelingData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FeelingPage);

const styles = {
    modalContent: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
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
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        fontWeight: 'bold',
        padding:20
    },
    sliderContainerStyle: {
        width: 340,
        height: 100,
        paddingTop: 15
    },
    sliderTextStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        fontWeight: 'bold',
    },
    sliderStyle: {
        marginLeft:30,
        marginRight: 30
    },
};