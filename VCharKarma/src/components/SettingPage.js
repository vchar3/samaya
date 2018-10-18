import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import {PageLayout} from '../common/index';
import Ionicons from 'react-native-vector-icons/Ionicons';



class LegalPage extends Component { 
    static navigationOptions = {
        title: 'Setting',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#7DBADF'
        },
        headerTintColor: "#ffff",
        headerRight: (<Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />)
      };

    state = { 

    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userName');
        this.props.navigation.navigate('Auth');
    }
   
    render() {
        const items = [
            { title: 'Logout', icon: 'ios-exit', routeName:'Logout' }
          ];
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.imageContainerStyle}>
                    <Image style={styles.imageStyle}
                        defaultSource={require('../../img/default.png')}/>
                    <Text style={{padding: 10}}>View Your Profile</Text>

                </View>
                <View style= {{paddingLeft: 20 }}> 
                {
                    items.map((item) =>{
                        return(
                        <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                        <View style= {{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                        <Ionicons name={item.icon} size={30} color={'green'} />
                            <Text style={{padding: 10}}> {item.title}</Text>
                        </View>
                        </TouchableOpacity>
                        )
                })
                }
                </View>
            </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps) (LegalPage);

const styles = {
    container: {     
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 20
      },
      imageStyle: {
        width: 125, 
        height: 125     
    },
    imageContainerStyle: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',

    }
  };
