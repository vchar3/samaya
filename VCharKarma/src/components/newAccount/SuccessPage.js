import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

import { Button, CardSection} from '../../common/index';

class SuccessPage extends Component { 
    static navigationOptions = {
        title: 'Congratulations',
        headerStyle: {
            backgroundColor: '#78B6DD',
            borderBottomColor: '#fff',
            
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
            fontSize: 24,
            alignSelf: 'center',
            textAlign: 'center',
        },
      };

    _buttonPressHandler(event) {
        this.props.navigation.navigate('Login');
       
    }
   
    render() {

        return (
            <View style={styles.container}>
               
                {/* <Text>{this.props.navigation.getParam('message')} </Text> */}
                <Text style={styles.titleStyle}>  Welcome to CareVen </Text>
                <Text style={styles.textContainStyle}>Thanks for choosing CareVen as your families care platform. 
                        CareVen was started with the core belief that individuals will always make the best choices when it comes to healthcare for themselves and for their loved ones. 
                        At CareVen we strive to provide tools that can help you manage your own health care information as well as create �circles of care� for your loved ones. 
                </Text>
                <Text style={styles.textContainStyle}>Your free CareVen account has been created and will be activated once we confirm your email address. </Text> 
                <Text style={styles.textContainStyle}>Please click on this link to confirm your email address: </Text>
                <Text style={styles.textContainCenterStyle}>  What's next? </Text>
                <Text style={styles.textContainCenterStyle}>  Questions? </Text>
                <Text style={{textAlign: 'center', fontSize: 14}}>  Contact us at </Text>
                <Text style={styles.textContainCenterStyle}>    �support@vchar3.com�anytime. </Text>
                <Text style={{textAlign: 'center', fontSize: 14, paddingBottom: 20}}>Questions, concerns, and feedback are always welcome. </Text>
                <Text style={{ fontSize: 14}}>All the best,</Text>
                <Text style={{ fontSize: 14, paddingBottom: 30}}>The team at CareVen </Text>

                <CardSection>
                    <Button 
                        style={{backgroundColor:'#32CD32'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                            <Text style={{color: '#fff'}}>Contiune</Text>
                    </Button>
                </CardSection>
            </View>
        );
    }
}

export default SuccessPage;

const styles = {
    
    container: {     
        flex: 1,
        justifyContent: 'flex-start',
        padding: 15,
        backgroundColor: '#ffff'

    },
    titleStyle: {
        textAlign: 'center', 
        fontSize: 20,
        paddingBottom: 10
    },
    textContainStyle: {
        fontSize: 14, 
        paddingBottom: 10
    },
    textContainCenterStyle: {
        textAlign: 'center', 
        fontSize: 14, 
        paddingBottom: 10
    }
    
  };
