import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

class NutritionPage extends Component { 
    static navigationOptions = {
        title: 'Nutrition',
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
        isBreakfastTaken: false,
        isLunchTaken: false,
        isDinnerTaken: false,
        isAssistanceNeeded: false,
        dateTime: ''
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("LT")}
                </Text> 
                <ToggleSlider 
                    textLabel = 'Breakfast'
                    toggleSwitchHandler= {(value) => this.setState({
                        isBreakfastTaken :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {this.state.isBreakfastTaken}
                />

                <ToggleSlider 
                    textLabel = 'Lunch'
                    toggleSwitchHandler= {(value) => this.setState({
                        isLunchTaken :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {this.state.isLunchTaken}
                />

                <ToggleSlider 
                    textLabel = 'Dinner'
                    toggleSwitchHandler= {(value) => this.setState({
                        isDinnerTaken :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {this.state.isDinnerTaken}
                />

                <Text style={{fontSize:24, marginTop: 10}}>
                    What did you eat?
                </Text>
                <TextInput 
                    value={this.state.foodToday}
                    style={styles.inputStyle}
                    onChangeText={ (food) => this.setState({ foodToday: food, dateTime: moment(new Date()).format("LT")  })}
                />

                <ToggleSlider 
                    textLabel = 'Needed Assistance'
                    toggleSwitchHandler= {(value) =>this.setState({
                        isAssistanceNeeded :value,
                        dateTime: moment(new Date()).format("LT")  
                    })}
                    isActive = {this.state.isAssistanceNeeded}
                />
                <AutoGrowTextArea 
                    self= {this}
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

export default connect(mapStateToProps, mapDispatchToProps) (NutritionPage);

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',

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
        width: 270
    },
    timeStyle: {
        color: '#7DBADF', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
}