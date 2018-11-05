import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';

class OtherAccountPage extends Component { 

    state = { 
        userName: ''
    }

    constructor() {
        super();

        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userName: 'John'
            });
        })
    }

    buttonPress() {
        console.log("press");
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.buttonPress()} style={{flexDirection:'row'}}>
                <Text>{this.state.userName}</Text>
                <Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />
                </TouchableOpacity>
            </View>
        );
    }


}


function mapStateToProps(state) {
    return {
      user: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (username, password) => dispatch(getUserLogin(username, password))
    }
    
}
    
export default connect(mapStateToProps, mapDispatchToProps) (OtherAccountPage);