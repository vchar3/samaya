import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

import { Button, CardSection} from '../../common/index';

class EmailPage extends Component { 
    static navigationOptions = {
        title: 'Create New Account',
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
                        this.props.navigation.navigate('Login');
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
                <Text> {this.state.error}</Text>
                <View style={{backgroundColor:'white', width: 300,}}>
                <TextField
                    label='Email'
                    value={email}
                    error={this.state.errorEmail}
                    errorColor={this.state.errorColor}
                    onChangeText={ (email) => this._checkEmailHandler(email) }
                />

                <TextField
                    label='Password'
                    value={password}
                    error={this.state.errorPassword}
                    errorColor={this.state.errorColor}
                    onChangeText={ (password) => this.setState({ 
                        password:password,
                        error: '',
                        errorPassword: ''
                      }) }
                />

                <TextField
                    label='Confirm Password'
                    value={confirmPassword}
                    error={this.state.errorConfPassword}
                    errorColor={this.state.errorColor}
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
                            Contiune
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'

      }
  };
