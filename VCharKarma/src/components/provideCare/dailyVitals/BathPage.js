import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import { LineChart } from 'react-native-chart-kit';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';


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
        noteText: '', 
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

                <AutoGrowTextArea 
                    self= {this}
                />
                    
                    <View>
                    <Text>
                        Bezier Line Chart
                    </Text>
                    <LineChart
                        data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'October', 'November', 'Decemeber'],
                        datasets: [{
                            data: [ 20, 45, 28, 80, 99, 43, 1010, 321, 400, 2389, 2783, 3000 ]
                        }]
                        }}
                        width={Dimensions.get('window').width - 40} // from react-native
                        height={220}
                        chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps) (BathPage);

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
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
    
}