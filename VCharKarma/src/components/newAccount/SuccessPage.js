import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';

import { Button, CardSection} from '../../common/index';

class SuccessPage extends Component { 
    static navigationOptions = {
        title: 'Congratulations',
      };

    _buttonPressHandler(event) {
        this.props.navigation.navigate('Login');
       
    }
   
    render() {

        return (
            <View style={styles.container}>
               
                <Text>{this.props.navigation.getParam('message')} </Text>
                <CardSection>
                    <Button 
                        style={{backgroundColor:'#32CD32'}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                            Contiune
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
        alignItems: 'center',
        backgroundColor: 'white'

      }
  };
