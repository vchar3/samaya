import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

import { Button, CardSection} from '../../common/index';

class EmailPage extends Component { 
    static navigationOptions = {
        title: 'New Account',
        headerStyle: {
            backgroundColor: '#78B6DD',
            borderBottomColor: '#fff',
            
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
            fontSize: 24,
            alignSelf: 'center',
            textAlign: 'center',
        },
      };

    state = {
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        errorColor: 'rgb(213, 0, 0)',
        errorEmail: '',
        errorPassword: '',
        errorConfPassword:''
    }

    _checkEmailHandler(data) {
        this.setState({ 
            email: data,
            error: '',
            errorEmail:''
         })
    }

    _buttonPressHandler(event) {

        if( this.state.email) { 
            if(this.state.password) {
                if(this.state.confirmPassword) {
                    if(this.state.password ===  this.state.confirmPassword) {
                        this.props.navigation.navigate('Profile', {
                            email: this.state.email,
                            password: this.state.password
                        });
                    } else {
                        this.setState({
                            error: 'Password did not match.',
                            errorPassword: 'Password did not match.',
                            errorConfPassword: 'Password did not match.'
                        })  
                    }
                } else {
                    this.setState({
                        error: 'There is error.',
                        errorConfPassword: 'Should not be empty'
                    }) 
                }
            } else {
                this.setState({
                    error: 'There is error.',          
                    errorPassword: 'Should not be empty',
                }) 
            }
            
        } else {
            this.setState({
                error: 'There is error.',
                errorEmail: 'Should not be empty'
            })
        }
       
    }
   
    render() {
        let { email, password, confirmPassword } = this.state;
        return (
            <View style={styles.container}>
                { this.state.error ?
                <Text style={{marginTop: 20, color: 'red'}}> {this.state.error}</Text> 
                :
                null
                }
                <View style={{backgroundColor:'white', width: 300,}}>
                <TextField
                    label='Email'
                    keyboardType= 'email-address'
                    autoCapitalize = 'none'
                    value={email}
                    error={this.state.errorEmail}
                    errorColor={this.state.errorColor}
                    textColor={'#78B6DD'}
                    baseColor={'#78B6DD'}
                    tintColor={'#78B6DD'}
                    onChangeText={ (email) => this._checkEmailHandler(email) }
                />

                <TextField
                    label='Password'
                    value={password}
                    password = {true}
                    secureTextEntry= {true}
                    error={this.state.errorPassword}
                    errorColor={this.state.errorColor}
                    textColor={'#78B6DD'}
                    baseColor={'#78B6DD'}
                    tintColor={'#78B6DD'}
                    onChangeText={ (password) => this.setState({ 
                        password:password,
                        error: '',
                        errorPassword: ''
                      }) }
                />

                <TextField
                    label='Confirm Password'
                    value={confirmPassword}
                    password = {true}
                    secureTextEntry= {true}
                    error={this.state.errorConfPassword}
                    errorColor={this.state.errorColor}
                    textColor={'#78B6DD'}
                    baseColor={'#78B6DD'}
                    tintColor={'#78B6DD'}
                    onChangeText={ (confirmPassword) => this.setState({ 
                        confirmPassword:confirmPassword,
                        error: '',
                        errorConfPassword: ''  
                    }) }
                />
                </View>
                <CardSection>
                    <Button 
                        style={{backgroundColor:'#32CD32'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                          <Text style={{color: '#fff'}}>Contiune</Text>
                    </Button>
                </CardSection>
            </View>
        );
    }
}

export default EmailPage;

const styles = {
    
    container: {     
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'

      }
  };
