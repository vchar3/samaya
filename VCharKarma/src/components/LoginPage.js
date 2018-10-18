import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Button, Card, CardSection, Header } from '../common/index';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';

class LoginPage extends Component { 
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#7DBADF'
        }
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
            this.props.navigation.navigate('HomeStack',{
                userName: this.state.username
            }); 
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
        const resizeMode = 'center';
        return (
            <View style={styles.container}> 
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }} 
                    >
                    <Image
                        source={require('../../img/BackgroundScreen.png')}
                    />

                </View>
                <View style={styles.imageContainerStyle}>
                    <Image style={styles.imageStyle}
                        source={require('../../img/CareVen.png')}/>
                </View>
                <Text style={styles.errorTextStyle}> 
                    {this.props.error}
                </Text>

                <CardSection>
                    <View style={{flex: 1,flexDirection: 'row',  borderBottomColor:'#fff', borderBottomWidth:1, padding: 15}}>
                        <View style={{justifyContent: 'center'}}>
                        <Image style={{paddingLeft: 15}} source={require('../../img/UserIcon.png')} />
                        </View>
                        <TextInput 
                            keyboardType= 'email-address'
                            onChangeText={(value) => this.setState({username: value})}
                            value={this.state.userName}
                            placeholder="username"
                            placeholderTextColor="white"
                            style={styles.inputStyle}
                            onChangeText={ (username) => this.setState({ username })}
                        /> 
                    </View> 
                </CardSection>
                <CardSection>
                    <View style={{flex: 1,flexDirection: 'row', borderBottomColor:'#fff', borderBottomWidth:1, padding: 15 }}>
                        <View style={{justifyContent: 'center'}}>
                        <Image style={{paddingLeft: 15}} source={require('../../img/PasswordIcon.png')} />
                        </View>
                        <TextInput 
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                            placeholder="password"
                            placeholderTextColor="white"
                            password = {true}
                            style={styles.inputStyle}
                            secureTextEntry= {true}
                            onChangeText={ (password) => this.setState({ password })}
                        />
                    </View>
                
                </CardSection>
                
                <CardSection>
                <View style={{ flex:1, flexDirection:'row'}}>
                    <Button style={styles.loginButtonStyle} 
                        onPress={this._loginPress.bind(this)}>
                        sign in
                    </Button>
                    <Button style={styles.createAccountStyle}
                        onPress={this._creatAccountPress.bind(this)}>
                        sign up
                    </Button>
                </View>
                </CardSection>   

               
                <CardSection>
                    <Text style={styles.textStyle}>Forgot your password?</Text>
                </CardSection>

                {/* <CardSection>
                    <Text style={styles.textStyle}>{this.state.userName}</Text>
                </CardSection> */}
                <Text> {this.props.user}</Text>
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
        backgroundColor: '#fff',
        flex: 1
      },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic'

    },
    inputStyle: { 
        paddingLeft: 5,
        paddingRight: 15,
        fontSize:24, 
        marginLeft: 15,
        marginRight: 15,
        width:300,
        maxWidth: 300,
        height:30,
        color: '#fff'
    },
    imageStyle: {
        width: 220, 
        height: 120
    },
    imageContainerStyle: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20
    },
    errorTextStyle: {
        fontSize:20, 
        color: 'red' 
    },
    loginButtonStyle: {
        backgroundColor:'white'
    },
    createAccountStyle: {
        backgroundColor:'#025282'
    },
    lineStyle: {
        flexDirection:'row', 
        flex: 1
    },
  };
