import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, AsyncStorage, Image } from 'react-native';
import { Button, Card, CardSection, Header } from '../common/index';
import { TextField } from 'react-native-material-textfield';
import {webSocketUrl} from '../../redux/apiUrlConfig'

import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';

window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';

class CareNotesPage extends Component { 
    static navigationOptions = {
        title: 'Care Notes',
        headerStyle: {
            backgroundColor: '#0077B5',
            borderBottomColor: '#0077B5'
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
            fontSize: 24
        },
        headerRight: (<Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />)
      };

    state = { 
        listmessage : [],
        userTypedText: '',
        userId: '',
        Timestamp: '',
        addUser: false,
        email: '',
        addUserSuccess: ''
    }

    constructor() {
        super();
        
        //connection to socket
        this.socket = io(webSocketUrl,
            {
                jsonp: false
            }
        );
        console.log("socket value", this.socket);

        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userId: value
            });

            //send userId to socket server
            this.socket.emit('charStart', {
                'userId': value
            })
        })        

        //getting chat data from socket
        this.socket.on('getChatData', (listOfChat)=> {
            console.log('list of chat', listOfChat);
            this.setState({listmessage: listOfChat});
        });

        //getting response from socket
        this.socket.on('response', (data)=>{ 
            console.log('response from server chat ', data);
            this.setState({listmessage: [...this.state.listmessage, data]});
        });

        //getting response from using user id
        this.socket.on(this.state.userId, (data)=>{ 
            console.log('response from server chat with userlist ', data);
            this.setState({
                addUserSuccess: data
            });
            this._sendHandler();
        });

    }

    //Sending chat to socket server
    _sendHandler() {
        console.log('message send');
        this.socket.emit('newMessage', {
            userName: this.state.userId, 
            message: this.state.userTypedText,
            userId: this.state.userId,
            addedNewUser: this.state.addUserSuccess
        })
    }

    _searchUserHandler() {
        this.setState({
            addUser: true
        }) 
    }

    _addUserHandler() {
        this.setState({
            addUser: false
        });

        //sending request to socket to add new user to chat group
        this.socket.emit('addUser', {
            friendUserId: this.state.email,
            userId: this.state.userId
        })

    }

    render() {
        let { email } = this.state;
        return (
            <View style={styles.mainContainer}> 
                    <Card> 
                    {
                        this.state.addUser 
                        ?
                        <CardSection> 
                        <View style={{flex: 1}}>     
                        <TextField
                            label='Email'
                            value={email}
                            onChangeText={ (email) => this.setState({ email }) }
                        /> 
                        </View>     
                        <Button style={styles.userButton} 
                            onPress={this._addUserHandler.bind(this)}>
                            Add User
                        </Button>  
                        </CardSection> 
                        : 
                        <CardSection>            
                        <Button style={styles.addButton} 
                            onPress={this._searchUserHandler.bind(this)}>
                            Add
                        </Button> 
                        </CardSection>   
                    }
                    </Card>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                    { 
                        this.state.listmessage.map((items, key) => {
                           if(items.addedNewUser) { 
                            return (
                                <Text style={{textAlign: 'center'}}> {items.addedNewUser} </Text>     
                            ) 
                            } else {
                            return ( 
                                <Card>
                                <CardSection key={key}>
                                <Text>{items.userName}: </Text>
                                <Text >{items.message}</Text>
                                </CardSection>
                                </Card>
                            )  
                            }
                        })
                    
                    }                
                    </ScrollView>
                <View 
                    style = {styles.textAreaContainer} 
                    enabled 
                    behavior="padding"
                    resetScrollToCoords={{ x: 0, y: 0 }}>
               
                <TextInput
                style={styles.textArea}
                 multiline={true}
                 numberOfLines={4}
                 underlineColorAndroid="transparent"
                 placeholder="Type something"
                 placeholderTextColor="grey"
                 scrollEnabled={true}
                 spellCheck={true}
                 onChangeText={(value) => this.setState({userTypedText: value})}
                /> 
                
                
                <Button style={styles.buttonStyle} 
                    onPress={this._sendHandler.bind(this)}>
                    Send
                </Button>
                
                </View>
            </View>
        );
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps) (CareNotesPage);

const styles = {
    mainContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'white'
        // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    textAreaContainer: {
        borderColor: 'grey',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0
        
    },
    textArea: {
        justifyContent: "flex-start",
        width: 300,
        height: 70,        
        padding: 15,
        borderWidth: 1,
    },

    buttonStyle: {
        justifyContent: "flex-end",
        width: 50,
        alignItems: 'flex-end',
        backgroundColor: 'green'
    },
    addButton : {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'blue',
        
    },
    userButton: {
        backgroundColor: 'blue',
        height: 40,
        marginTop: 20
    },
    buttonText: {
        backgroundColor: 'green',
        padding:5
    },
    scrollContainer: {
        paddingBottom: 20
    }
};