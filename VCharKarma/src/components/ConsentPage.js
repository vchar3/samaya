import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions';
import { ToggleSlider } from '../common/index';
import FooterBar from '../common/FooterBar';



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
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' },
            { name: 'John Smith'  },
            { name: 'Susan' }
          ];

        return (
            <View style= {styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>All Health Information </Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { information.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {this.state.isActive}
                    />

                ))}
                </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Daily Vitals </Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { information.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {this.state.isActive}
                    />

                ))}
                 </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Home Care Notes</Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { information.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {this.state.isActive}
                    />

                ))}
                 </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Medical Records</Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { information.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {this.state.isActive}
                    />

                ))}
                 </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Medication </Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { information.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {this.state.isActive}
                    />

                ))}
                 </ScrollView>
                </View>
                
            </ScrollView>
           
            {/* <FooterBar /> */}
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
    mainContainer: {
        flex: 1
    },
    container: {   
        marginTop: 15,  
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    bodyContainer: {
        height: 200,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 7.5, 
        marginTop: 7.5, 
        // backgroundColor: 'green'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10

    },
    contain: {
        
    }
  };
