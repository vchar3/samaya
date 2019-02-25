import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addOtherVitals } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

import { Button, CardSection} from '../../../common/index';

class OtherVitalsPage extends Component { 
    static navigationOptions = {
        title: 'OtherVitals',
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
        temp: 0,
        respiratory: 0,
        pulse: 0,

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
            id: 'OtherVitals',
            noteText: this.state.noteText, 
            temp: this.state.temp,
            respiratory: this.state.respiratory,
            pulse: this.state.pulse,
            userId: this.state.userId
        };
        this.props.postOtherVital(data);
        this.props.navigation.goBack();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("LT")}
                </Text> 
                <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <Text style={{fontSize:18, width: 150}}>
                        Body Temp   
                    </Text>
                    <TextInput 
                        value={this.state.temp}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                            temp :value 
                        })}
                    />
                    <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                    {this.state.temp}
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <Text style={{ fontSize:18, width: 150}}>
                        Respiratory Rate
                    </Text>
                    <TextInput 
                        value={this.state.respiratory}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                                respiratory :value
                        })}
                    />
                    <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                    {this.state.respiratory}
                    </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <Text style={{fontSize:18, width: 150}}>
                        Pulse Oxygen
                    </Text>
                    <TextInput 
                        value={this.state.pulse}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                            pulse :value
                        })}
                    />
                    <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                    {this.state.pulse}
                    </Text>
                </View>

                <AutoGrowTextArea 
                    self= {this}
                />

                <CardSection>
                    <Button 
                        style={{backgroundColor:'#32CD32'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                          <Text style={{color: '#fff'}}>Save</Text>
                    </Button>
                </CardSection>
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
        postOtherVital: (otherVitalData) => dispatch(addOtherVitals(otherVitalData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (OtherVitalsPage);

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        fontSize: 18, 
        borderWidth: 1,
        width: 60
    },
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
}