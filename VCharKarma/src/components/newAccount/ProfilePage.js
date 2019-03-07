import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button, CardSection, headerBarWithOutAccount} from '../../common/index';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DateTimePicker from 'react-native-modal-datetime-picker';



class ProfilePage extends Component { 
    static navigationOptions = () => (headerBarWithOutAccount('New Account')); 

    state = { 
        isDateTimePickerVisible: false,
        firstName: '',
        lastName:'',
        dateOfBirth:'',
        gender:'Male',
        phone:'',
        homePhone:'',
        error: '',
        errorColor: 'rgb(213, 0, 0)',
        errorFirstName: '',
        errorLastName: '',
        errorMobile:'',
        errorDOB: '',
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
   
    _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      let dateToString = date.toString().split(' ');
      let value = dateToString[1] + ' ' + dateToString[2] + ' ' + dateToString[3]

      this.setState({ 
          dateOfBirth: value,
          errorDOB:''
        });
      this._hideDateTimePicker();
    };

    _buttonPressHandler(event) {
        let errorCheck = false;
        if(!this.state.firstName) {
            errorCheck = true;
            this.setState({
                errorFirstName: 'Should not be empty',
                error: 'There is error.'
            });
        }

        if(!this.state.lastName) {
            errorCheck = true;
            this.setState({
                errorLastName: 'Should not be empty',
                error:'There is error.'
            })
        }

        if(!this.state.phone) {
            errorCheck = true;
            this.setState({
                errorMobile: 'Should not be empty',
                error:'There is error.'
            }) 
        }

        if(!this.state.dateOfBirth) {
            errorCheck = true;
            this.setState({
                errorDOB: 'Should not be empty',
                error:'There is error.'
            }) 
        }
        
        if(!errorCheck) {
            this.setState({
                error:''
            }) 
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
    }
   
    render() {
        let { firstName, lastName, dateOfBirth, gender, phone, homePhone} = this.state;
        var radio_props = [
            {label: 'Male', value: 'Male' },
            {label: 'Female', value: 'Female' }
          ];
        return (
            <View style={styles.container}>
                { this.state.error ?
                <Text style={{marginTop: 20, color: 'red'}}> {this.state.error}</Text> 
                :
                null
                }
                <View style={{backgroundColor:'white', width: 300}}>
                    <TextField
                        label='First Name'
                        value={firstName}
                        error={this.state.errorFirstName}
                        errorColor={this.state.errorColor}
                        textColor={'#0077B5'}
                        baseColor={'#0077B5'}
                        tintColor={'#0077B5'}
                        onChangeText={ (firstName) => this.setState({ 
                            firstName:firstName,
                            errorFirstName: ''
                        }) }
                    />

                    <TextField
                        label='Last Name'
                        value={lastName}
                        error={this.state.errorLastName}
                        errorColor={this.state.errorColor}
                        textColor={'#0077B5'}
                        baseColor={'#0077B5'}
                        tintColor={'#0077B5'}
                        onChangeText={ (lastName) => this.setState({ 
                            lastName:lastName,
                            errorLastName: ''
                        }) }
                    />

                    <TextField
                        label='Date of Birth'
                        value={dateOfBirth}
                        error={this.state.errorDOB}
                        errorColor={this.state.errorColor}
                        textColor={'#0077B5'}
                        baseColor={'#0077B5'}
                        tintColor={'#0077B5'}
                        onChangeText={ (dateOfBirth) => this.setState({ 
                            dateOfBirth: dateOfBirth,
                            errorDOB:''
                        })}
                        onFocus={() => this.setState({ 
                            isDateTimePickerVisible: true 
                        })}
                    />
                    
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        titleIOS={'Date of Birth'}
                        mode={'date'}
                        titleStyle= {{fontSize: 20, color: '#0077B5'}}
                    />
                    
                    <View style={{width: 340, alignItems: 'center', marginTop: 10}}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {this.setState({gender:value})}}
                            formHorizontal={true}
                            labelStyle={{fontSize: 20, marginRight: 20, color: '#0077B5'}}
                            buttonWrapStyle={{marginLeft: 50}}

                        />
                    </View>

                    <TextField
                        label='Mobile Phone'
                        value={phone}
                        keyboardType= {'phone-pad'}
                        error={this.state.errorMobile}
                        errorColor={this.state.errorColor}
                        textColor={'#0077B5'}
                        baseColor={'#0077B5'}
                        tintColor={'#0077B5'}
                        onChangeText={ (phone) => this.setState({ 
                            phone:phone,
                            errorMobile: ''
                        }) }
                    />

                    <TextField
                        label='Home Phone'
                        value={homePhone}
                        keyboardType= {'phone-pad'}
                        textColor={'#0077B5'}
                        baseColor={'#0077B5'}
                        tintColor={'#0077B5'}
                        onChangeText={ (homePhone) => this.setState({ 
                            homePhone:homePhone,
                        }) }
                    />

                </View>
                <CardSection>
                    <Button 
                        style={{backgroundColor:'#0077B5'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                           <Text style={{color: '#fff'}}>Contiune</Text>
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
