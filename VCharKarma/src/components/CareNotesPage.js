import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Card, CardSection, Header } from '../common/index';
import { TextField } from 'react-native-material-textfield';
window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';

import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';

class CareNotesPage extends Component { 
    static navigationOptions = {
        title: 'Care Notes',
      };

    state = { 
        listmessage : [],
        userTypedText: '',
        userId: 'user50@gmail.com',
        Timestamp: '',
        addUser: false,
        email: '',
        addUserSuccess: ''
    }

    constructor() {
        super();
        this.socket = io('localhost:4000');
        this.socket.emit('charStart', {
            'userID': '1234'
        })

        this.socket.on('getChatData', (listOfChat)=> {
            console.log('list of chat', listOfChat);
            this.setState({listmessage: listOfChat});
        });

        this.socket.on('response', (data)=>{ 
            console.log('response from server chat ', data);
            this.setState({listmessage: [...this.state.listmessage, data]});
        });

        this.socket.on(this.state.userId, (data)=>{ 
            console.log('response from server chat with userlist ', data);
            this.setState({
                addUserSuccess: data
            });
            this._sendHandler();
        });

    }

    _sendHandler() {
        console.log('message send');
        this.socket.emit('newMessage', {
            userName: 'John', 
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
        })
        this.socket.emit('addUser', {
            firstName: this.state.email,
            middleName: '',
            lastName: '',
            friendUserId: 'user75@gmail.com',
            userId: 'user50@gmail.com'
        })

    }



    render() {
        let { email } = this.state;
        return (
            <View style={styles.mainContainer}> 
                <View style ={{marginTop: 10}}>
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
                </View>
                <View 
                    style = {styles.textAreaContainer} 
                    enabled 
                    behavior="padding"
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    >
               
                <TextInput
                style={styles.textArea}
                 multiline={true}
                 numberOfLines={4}
                 underlineColorAndroid="transparent"
                 placeholder="Type something"
                 placeholderTextColor="grey"
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
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    textAreaContainer: {
        position: 'absolute',
        borderColor: 'grey',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0
        
    },
    textArea: {
        justifyContent: "flex-start",
        width: 300,
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
        flexGrow: 1,
        paddingBottom: 20,
        height: 490
    }
};