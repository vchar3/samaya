import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button, CardSection} from '../../common/index';



class ProfilePage extends Component { 
    static navigationOptions = {
        title: 'Create New Account',
      };

    state = { 
        firstName: '',
        lastName:'',
        dateOfBirth:'',
        gender:'',
        phone:'',
        homePhone:'',
    }

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
                    onChangeText={ (dateOfBirth) => this.setState({ 
                        dateOfBirth:dateOfBirth,
                      }) }
                />
                
                <TextField
                    label='Gender'
                    value={gender}
                    onChangeText={ (gender) => this.setState({ 
                        gender:gender,
                      }) }
                />

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
        backgroundColor: 'white'

      }
  };
