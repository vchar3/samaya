import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  AsyncStorage
} from 'react-native';
import {webSocketUrl} from '../../redux/apiUrlConfig'

window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/dist/socket.io';

export default class ChatPage extends Component {

    static navigationOptions = {
        title: 'Chat',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#7DBADF'
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

    constructor(props) {
    super(props);

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

    renderDate = (date) => {
        let formateDate = date.split('T')[0];
        return(
            <Text style={styles.time}>
            {formateDate}
            </Text>
        );
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

        return (
            <View style={styles.container}>
            
            <FlatList style={styles.list}
                data={this.state.listmessage}
                keyExtractor= {(item) => {
                    return item._id;
                }}
                renderItem={(message) => {
                    console.log(item);
                    const item = message.item;
                    let inMessage = item.userId === this.state.userId;
                    let itemStyle = inMessage ? styles.itemOut : styles.itemIn;
                    return (
                        <View>
                            <Text>{item.userName}</Text>
                            <View style={[styles.item, itemStyle]}>
                                {!inMessage && this.renderDate(item.chatDatetime.chatDate)}
                                <View style={[styles.balloon]}>
                                <Text>{item.message}</Text>
                                </View>
                                {inMessage && this.renderDate(item.chatDatetime.chatDate)}
                            </View>
                        </View>
                    )
                }}/>
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Write a message..."
                    underlineColorAndroid='transparent'
                    onChangeText={(value) => this.setState({userTypedText: value})}/>
                </View>

                <TouchableOpacity style={styles.btnSend} onPress={this._sendHandler.bind(this)}>
                    <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFF'
  },
  list:{
    paddingHorizontal: 17,
  },
  footer:{
    flexDirection: 'row',
    minHeight:60,
    maxHeight: 100,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
  },
  btnSend:{
    backgroundColor:"#00BFFF",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute',
    right: 10,
    bottom: 10
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    minHeight:40,
    maxHeight: 100,
    flexDirection: 'row',
    alignItems:'center', 
    marginRight:15,
    width:300  
  },
  inputs:{
    minHeight:40,
    maxHeight: 100,
    marginLeft:16,
    marginRight:16,
    marginTop:10,
    marginBottom:10, 
    width: 270,
    borderBottomColor: '#FFFFFF',
   
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start'
  },
  itemOut: {
    alignSelf: 'flex-end'
  },
  time: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginBottom:15,
    fontSize:12,
    color:"#808080",
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor:"#eeeeee",
    borderRadius:300,
    padding:5,
  },
});