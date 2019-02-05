import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button, CardSection} from '../../common/index';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DateTimePicker from 'react-native-modal-datetime-picker';



class ProfilePage extends Component { 
    static navigationOptions = {
        title: 'Create New Account',
      };

    state = { 
        isDateTimePickerVisible: false,
        firstName: '',
        lastName:'',
        dateOfBirth:'',
        gender:'',
        phone:'',
        homePhone:'',
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
   
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      let dateToString = date.toString().split(' ');
      let value = dateToString[1] + ' ' + dateToString[2] + ' ' + dateToString[3]

      this.setState({ dateOfBirth: value});
      this._hideDateTimePicker();
    };

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        let accountInfo = {
            email: this.props.navigation.getParam('email'),
            password: this.props.navigation.getParam('password'),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            dateOfBirth: this.state.dateOfBirth,
            gender: this.state.gender,
            cellPhone: this.state.phone,
            homePhone: this.state.homePhone,
            user_id:this.props.navigation.getParam('email')
        }
        this.props.navigation.navigate('HealthProfile', {
            accountDetail: accountInfo
        });
    }
   
    render() {
        let { firstName, lastName, dateOfBirth, gender, phone, homePhone} = this.state;
        var radio_props = [
            {label: 'Male', value: 'M' },
            {label: 'Female', value: 'F' }
          ];
        return (
            <View style={styles.container}>
                {/* <Text> {this.props.navigation.getParam('userName')}</Text> */}
                <Text> {this.state.error}</Text>
                <View style={{backgroundColor:'white', width: 300,}}>
                <TextField
                    label='First Name'
                    value={firstName}
                    onChangeText={ (firstName) => this.setState({ 
                        firstName:firstName,
                      }) }
                />

                <TextField
                    label='Last Name'
                    value={lastName}
                    onChangeText={ (lastName) => this.setState({ 
                        lastName:lastName,
                      }) }
                />

                <TextField
                    label='Date of Birth'
                    value={dateOfBirth}
                    onChangeText={ (dateOfBirth) => this.setState({ dateOfBirth: dateOfBirth})}
                    onFocus={() => this.setState({ isDateTimePickerVisible: true })}
                />
                
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                    titleIOS={'Date of Birth'}
                    mode={'date'}
                />
                
                <View style={{width: 340, alignItems: 'center', marginTop: 10}}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => {this.setState({gender:value})}}
                        formHorizontal={true}
                        labelStyle={{fontSize: 20, marginRight: 20, color: '#9b9b9b'}}
                        buttonWrapStyle={{marginLeft: 50}}

                    />
                </View>

                 <TextField
                    label='Mobile Phone'
                    value={phone}
                    onChangeText={ (phone) => this.setState({ 
                        phone:phone,
                      }) }
                />

                 <TextField
                    label='Home Phone'
                    value={homePhone}
                    onChangeText={ (homePhone) => this.setState({ 
                        homePhone:homePhone,
                      }) }
                />

                </View>
                <CardSection>
                    <Button 
                        style={{backgroundColor:'#32CD32'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                            Contiune
                    </Button>
                </CardSection>
            </View>
        );
    }
}


export default ProfilePage;

const styles = {
    
    container: {     
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',

      }
  };
