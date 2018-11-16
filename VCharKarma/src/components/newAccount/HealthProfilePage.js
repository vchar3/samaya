import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button, CardSection} from '../../common/index';

class HealthProfilePage extends Component { 
    static navigationOptions = {
        title: 'Create New Account',
      };

    state = { 
        email: '',
        password: '',
        error: '',
        errorColor: 'rgb(213, 0, 0)',
        errorEmail: '',
        errorPassword: '',
        errorConfPassword:''
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        this.props.navigation.navigate('HealthProfile', {
            userName: this.state.email,
            password: this.state.password
        });
    }
   
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text> {this.props.navigation.getParam('userName')}</Text>
                <Text> {this.state.error}</Text>
                {/* <View style={{backgroundColor:'white', width: 300,}}>
                <TextField
                    label='Email'
                    keyboardType= 'email-address'
                    autoCapitalize = {false}
                    value={email}
                    error={this.state.errorEmail}
                    errorColor={this.state.errorColor}
                    //onChangeText={ (email) => this._checkEmailHandler(email) }
                />

                <TextField
                    label='Password'
                    value={password}
                    password = {true}
                    secureTextEntry= {true}
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
                    value={password}
                    password = {true}
                    secureTextEntry= {true}
                    error={this.state.errorConfPassword}
                    errorColor={this.state.errorColor}
                    onChangeText={ (password) => this.setState({ 
                        password:password,
                        error: '',
                        errorConfPassword: ''  
                    }) }
                />
                </View> */}
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
export default HealthProfilePage;

const styles = {
    
    container: {     
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

      }
  };
