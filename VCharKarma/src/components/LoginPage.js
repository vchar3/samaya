import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Button, Card, CardSection, Header } from '../common/index';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';

class LoginPage extends Component { 
    static navigationOptions = {
        title: 'VChar3',
      };

    state = { 
        username: '',
        password: '',
        errors: ''
    }
    componentDidUpdate(prevProps) {
        const { authenticationToken } = this.props;
        if(authenticationToken) {
            AsyncStorage.setItem('userToken', authenticationToken);
            AsyncStorage.setItem('userName', this.state.username);
            this.props.navigation.navigate('HomeStack'); 
        } 
    }

    _loginPress(event) {
        this.props.getUser(this.state.username, this.state.password);
    }

    _creatAccountPress(event) {
        console.log('Creat Account Press', this.state);
        
    }
   
    render() {
        let { username, password } = this.state;
        return (
            <View> 
                <Text style={{fontSize:20, color: 'red'}}> {this.props.error}</Text>
                <Card style={styles.container}>
                    <CardSection> 
                        <TextInput 
                            keyboardType= 'email-address'
                            onChangeText={(value) => this.setState({username: value})}
                            value={this.state.userName}
                            placeholder="Enter your username"
                            style={styles.inputStyle}
                            onChangeText={ (username) => this.setState({ username })}
                        /> 
                    </CardSection>
                    <CardSection>
                        <TextInput 
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                            placeholder="Enter your password"
                            password = {true}
                            style={styles.inputStyle}
                            secureTextEntry= {true}
                            onChangeText={ (password) => this.setState({ password })}
                        />
                    </CardSection>
                    <CardSection>
                        <Button style={{backgroundColor:'#32CD32'}} 
                            onPress={this._loginPress.bind(this)}>
                            Login
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textStyle}>Forgot your password?</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textStyle}>OR</Text>
                    </CardSection>
                    <CardSection>
                        <Button style={{backgroundColor:'#A9A9A9'}}
                           onPress={this._creatAccountPress.bind(this)}>
                            Create New Account
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Text style={styles.textStyle}>{this.state.userName}</Text>
                    </CardSection>
                    <Text> {this.props.user}</Text>
                    
                </Card>
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log("state from login", state.userReducer.error.response);
    let token ;
    let error;
    if(state.userReducer.data.data) {
        token = state.userReducer.data.data.token
    }

    if(state.userReducer.error.response) {
        error = state.userReducer.error.response.data.message
    }

    return {
      authenticationToken: token,
      error: error
    }
  }
  
function mapDispatchToProps(dispatch) {
return {
    getUser: (username, password) => dispatch(getUserLogin(username, password))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (LoginPage);

const styles = {
    container: {     
        backgroundColor: 'red'

      },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1

    },
    inputStyle: {
        height:40, 
        flex: 1,  
        fontSize: 18, 
        borderWidth: 1, 
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 10
    }
  };
