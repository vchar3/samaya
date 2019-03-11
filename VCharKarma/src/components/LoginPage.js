import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Button, Card, CardSection, Header } from '../common/index';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import DeviceInfo from 'react-native-device-info';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as loc, removeOrientationListener as rol} from 'react-native-responsive-screen';

class LoginPage extends Component { 
    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: '#0077B5',
            borderBottomColor: '#0077B5',
            borderWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
        }
      };
      
    state = { 
        username: '',
        password: '',
        errors: ''
    }

    componentDidMount() {
        loc(this);
    }

    componentWillUnmount() {
        rol();
    }
    
    componentDidUpdate(prevProps) {
        const { authenticationToken, userDetailInfo } = this.props;
        if(authenticationToken && authenticationToken !== prevProps.authenticationToken) {
            AsyncStorage.setItem('userToken', authenticationToken);
            AsyncStorage.setItem('userName', this.state.username);
            AsyncStorage.setItem('name', userDetailInfo.name);
            AsyncStorage.setItem('userId', userDetailInfo.userid);
            this.props.navigation.navigate('HomeStack',{
                userName: this.state.username
            }); 
        } 
    }

    _loginPress(event) {
        //const deviceId = DeviceInfo.getDeviceId();
        //console.log('deviceID ', deviceId);
        this.props.getUser(this.state.username, this.state.password);
    }

    _creatAccountPress(event) {
        console.log('Creat Account Press', this.state);
        this.props.navigation.navigate('Email');
        
    }
   
    render() {
        let { username, password } = this.state;
        const resizeMode = 'center';
        return (
            <View style={styles.container}> 
                {/* <View
                    style={{
                        position: 'absolute',
                        width: wp('100%'),
                        height: hp('100%')
                    }} 
                    >
                    <Image
                        source={require('../../img/BackgroundScreen.png')}
                    />

                </View> */}
                <View style={styles.imageContainerStyle}>
                    <Image style={styles.imageStyle}
                        source={require('../../img/CareVen.png')}/>
                </View>
                <Text style={styles.errorTextStyle}> 
                    {this.props.error}
                </Text>

                <CardSection>
                    <View style={styles.inputContainerStyle}>
                        <View style={{justifyContent: 'center'}}>
                        <Image style={{paddingLeft: 15}} source={require('../../img/UserIcon.png')} />
                        </View>
                        <TextInput 
                            keyboardType= 'email-address'
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                            onChangeText={(value) => this.setState({username: value})}
                            value={this.state.userName}
                            placeholder="username"
                            placeholderTextColor="white"
                            style={styles.inputStyle}
                            onChangeText={ (username) => this.setState({ username })}
                            selectionColor={'white'}
                        /> 
                    </View> 
                </CardSection>
                <CardSection>
                    <View style={styles.inputContainerStyle}>
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
                            selectionColor={'white'}
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
    let token ;
    let error;
    let userDetail = {};
    if(state.userReducer.data.data) {
        token = state.userReducer.data.data.token;
        userDetail = state.userReducer.data.data;
    }

    if(state.userReducer.error.response) {
        error = state.userReducer.error.response.data.message
    }

    return {
      authenticationToken: token,
      error: error,
      userDetailInfo: userDetail
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
        backgroundColor: '#0077B5',
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
    inputContainerStyle: {
        flex: 1,
        flexDirection: 'row',  
        borderBottomColor:'#fff', 
        borderBottomWidth:1,  
        paddingLeft: 15, 
        paddingRight:15,
        paddingTop:0,
        paddingBottom:0
    },
    inputStyle: { 
        paddingLeft: 5,
        paddingRight: 15,
        fontSize:24, 
        marginLeft: 15,
        marginRight: 15,
        width:wp('90%'),
        maxWidth: wp('90%'),
        height:hp('10%'),
        color: '#fff',
    },
    imageStyle: {
        width: wp('91%'),
        height: hp('31%'),
        marginTop: 12
    },
    imageContainerStyle: {
        justifyContent: 'center', 
        alignItems: 'center',
        // width: wp('100%'),
        // height: hp('30%')
        
    },
    errorTextStyle: {
        textAlign:'center',
        fontSize:20, 
        color: 'red' 
    },
    loginButtonStyle: {
        backgroundColor:'white'
    },
    createAccountStyle: {
        backgroundColor:'#D0DFF1'
    }
  };
