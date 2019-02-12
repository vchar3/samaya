import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import { BarChart, Grid, LineChart, XAxis } from 'react-native-svg-charts';
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
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
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
                    <Text  style={styles.timeStyle}>
                        Number of fall today
                    </Text>
                    <TextInput 
                        value={this.state.falls.number}
                        style={styles.inputStyle}
                        keyboardType={ 'numeric'}
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
                    style={{ height: 200, width: 300  }}
                    data={ data }
                    svg={{ fill }}
                    contentInset={{ top: 30, bottom: 30 }}
                >
                    <Grid/>
                </BarChart>

                <ScrollView horizontal={true} contentContainerStyle={{width: 300}}>
                    <View style={{ height: 200, padding: 20, width: 300 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        gridMin={0}
                        contentInset={{ top: 10, bottom: 10 }}
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                    >
                        <Grid />
                    </LineChart>
                    <XAxis
                        style={{ marginHorizontal: -10 }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={{ fontSize: 10, fill: 'black' }}
                    />
                    </View>
                </ScrollView>

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
        marginTop: 10,
        color: '#7DBADF', 
    },
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
}
