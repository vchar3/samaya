import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import { BarChart, Grid } from 'react-native-svg-charts';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

class FallsPage extends Component { 
    static navigationOptions = {
        title: 'Walks & Falls',
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
        noteText: '', 
        falls: {
            isFalls: false,
            number: 0,
            dateTime:''
        }
    }
    
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data   = [ 50, 10, 40, 95, 4, 24 ]
        return (
            <View style={styles.container}>
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("LT")}
                </Text>  
                <ToggleSlider 
                    textLabel = 'Did you take walk today?'
                    toggleSwitchHandler= {(value) => this.setState({
                        falls: {
                            ...this.state.falls,
                            isFalls :value,
                            dateTime: moment(new Date()).format("LT") 
                        } 
                    })}
                    isActive = {this.state.falls.isFalls}
                />
                { this.state.falls.isFalls  
                ? <View>
                    <Text>
                        Number of fell today
                    </Text>
                    <TextInput 
                        value={this.state.falls.number}
                        style={styles.inputStyle}
                        onChangeText={ (value) => this.setState({ 
                            falls: {
                                ...this.state.falls,
                                number :value,
                                dateTime: moment(new Date()).format("LT") 
                            }  
                        })}
                    />
                </View>
                : null
                }

                <AutoGrowTextArea 
                    self= {this}
                />
                <BarChart
                    style={{ height: 200 }}
                    data={ data }
                    svg={{ fill }}
                    contentInset={{ top: 30, bottom: 30 }}
                >
                    <Grid/>
                </BarChart>

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

export default connect(mapStateToProps, mapDispatchToProps) (FallsPage);

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
        fontSize:24, 
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
    },
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
}
