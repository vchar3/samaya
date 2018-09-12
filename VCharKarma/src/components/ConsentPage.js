import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions';
import { ToggleSlider } from '../common/index';



class ConsentPage extends Component { 
    static navigationOptions = {
        title: 'Consent',
      };

    state = { 
         isActive: false,
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        this.props.navigation.dispatch({type: 'Login'});
    }
    _toggleSwitchHandler(value) {
        console.log(value);
       this.setState({isActive: value})
    }
   
    render() {
        let { } = this.state;
        const information = [
            { name: 'Everyone in my care circle'  }, 
            { name: 'John Smith'  },
            { name: 'Susan' }
          ];

        return (
            <View style={styles.container}>
            { information.map((item, index) => (

                <ToggleSlider 
                    textLabel = {item.name}
                />

            ))}
            </View>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps) (ConsentPage);

const styles = {
    
    container: {     
        flex: 1
      }
  };
