import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';


class BathPage extends Component { 
    static navigationOptions = {
        title: 'Bath',
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
        bath: {
            isBathTaken: false,
            isAssistanceNeeded: false,
            dateTime:''
        },
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("LT")}
                </Text>          
                    <ToggleSlider 
                        textLabel = 'Did you take a bath'
                        toggleSwitchHandler= {(value) => this.setState({
                            bath: {
                                ...this.state.bath,
                                isBathTaken :value
                            } 
                        })}
                        isActive = {this.state.bath.isBathTaken}
                    />

                    <ToggleSlider 
                        textLabel = 'Needed Assistance'
                        toggleSwitchHandler= {(value) =>this.setState({
                            bath: {
                                ...this.state.bath,
                                isAssistanceNeeded :value,
                                dateTime: moment(new Date()).format("LT") 
                            }
                        })}
                        isActive = {this.state.bath.isAssistanceNeeded}
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
        getUser: (username, password) => dispatch(getUserLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BathPage);

const styles = {
    container: {
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
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
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
    
}