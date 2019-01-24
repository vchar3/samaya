import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';

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
        otherVitals: {
            temp: 0,
            respiratory: 0,
            pulse: 0,
            dateTime:''
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <Text style={{fontSize:18, width: 150}}>
                        Body Temp   
                    </Text>
                    <TextInput 
                        value={this.state.otherVitals.temp}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                            otherVitals: {
                                ...this.state.otherVitals,
                                temp :value
                            }  
                        })}
                    />
                    <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                    {this.state.otherVitals.temp}
                    </Text>
                </View>

                            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <Text style={{ fontSize:18, width: 150}}>
                        Respiratory Rate
                    </Text>
                    <TextInput 
                        value={this.state.otherVitals.respiratory}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                            otherVitals: {
                                ...this.state.otherVitals,
                                respiratory :value
                            }  
                        })}
                    />
                    <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                    {this.state.otherVitals.respiratory}
                    </Text>
                </View>

                            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 20}}>
                    <Text style={{fontSize:18, width: 150}}>
                        Pulse Oxygen
                    </Text>
                    <TextInput 
                        value={this.state.otherVitals.pulse}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                            otherVitals: {
                                ...this.state.otherVitals,
                                pulse :value
                            }  
                        })}
                    />
                    <Text style={{textAlign:'center', fontSize:20, width: 60, marginLeft: 20}}>
                    {this.state.otherVitals.pulse}
                    </Text>
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

export default connect(mapStateToProps, mapDispatchToProps) (OtherVitalsPage);

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
        fontSize: 18, 
        borderWidth: 1,
        width: 60
    },
}