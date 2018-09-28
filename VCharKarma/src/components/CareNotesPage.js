import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';

class CareNotesPage extends Component { 
    static navigationOptions = {
        title: 'Care Notes',
      };

    state = { 
        message : [],
        userTypeText: '',
        userId: '',
        Timestamp: ''
    }
    render() {
        return (
            <View style={styles.mainContainer}> 
                <ScrollView>
                <Text>Comming Soon </Text>

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
                 onChangeText={(value) => this.setState({userTypeText: value})}
                /> 
                
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Send </Text>
                </TouchableOpacity>
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
        borderRadius: 25
    },
    buttonText: {
        backgroundColor: 'green',
        padding:5
    }
};