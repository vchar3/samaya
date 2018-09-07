import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {connect} from 'react-redux';
import { Button, Card, CardSection, Header } from '../common/index';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions';

class LoginPage extends Component { 
    state = { 
        username: '',
        password: ''
    }

    _loginPress(event) {
        console.log('Pressed!');
        
         var username = this.state.username;
         var password = this.state.password;
         this.props.getUser(username, password);
        
         console.log(username);
         console.log(password);
    }

    _creatAccountPress(event) {
        console.log('Creat Account Press');
        
    }
   
    render() {
        let { username, password } = this.state;
        return (
            <View> 
                <Header  headerText="Vchar3"> </Header> 
                <Card style={styles.container}>
                    <CardSection> 
                        <TextInput 
                            onChangeText={(value) => this.setState({username: value})}
                            value={this.state.userName}
                            placeholder="Username"
                            style={styles.inputStyle}
                            onChangeText={ (username) => this.setState({ username })}
                        /> 
                    </CardSection>
                    <CardSection>
                        <TextInput 
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                            placeholder="Password"
                            password = {true}
                            style={styles.inputStyle}
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


                </Card>
            </View>
        );
    }
}

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
        marginRight: 5
    }
  };
