import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Card, CardSection, Header } from '../common/index';
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
        userId: '',
        Timestamp: ''
    }

    constructor() {
        super();
        this.socket = io('localhost:4000');
        this.socket.emit('charStart', {
            'userID': '1234'
        })
    }

    componentDidUpdate(prevProps) {
        this.socket.on('response', (data)=>{ 
            console.log('response from server chat ', data);
            this.setState({listmessage: [...this.state.listmessage, data]});
        });
    
    }

    _sendHandler() {
        console.log('message send');
        this.socket.emit('newMessage', {
            userName: 'John', 
            message: this.state.userTypedText,
            userId: 'user50@gmail.com'
        })
    }



    render() {
        return (
            <View style={styles.mainContainer}> 
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                { 
                    this.state.listmessage.map((items) => (
                        
                        <Card style={{backgroundColor: 'red'}}>
                        <CardSection>
                        <Text>{items.message}</Text>
                        </CardSection>
                        </Card>
                    ))
                   
                }
                {/* <Text>{this.state.userTypedText} </Text> */}
                

                </ScrollView>
                
                <KeyboardAvoidingView 
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
                
                {/* <TouchableOpacity style={styles.buttonStyle}> */}
                        <Button style={styles.buttonStyle} 
                            onPress={this._sendHandler.bind(this)}>
                            Send
                        </Button>
                {/* </TouchableOpacity> */}
                </KeyboardAvoidingView>
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
        borderRadius: 25,
        backgroundColor: 'green'
    },
    buttonText: {
        backgroundColor: 'green',
        padding:5
    },
    scrollContainer: {
       height: 400
      
    }
};