import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import FooterBar from '../common/FooterBar';
import { BottomNavBar, AppHeader } from '../common/index';
import {BottomTabBar} from '../navigators/AppNavigator';

import OtherAccountPage from './OtherAccountPage';


class HomePage extends Component { 
    static navigationOptions = ({navigation}) =>{
        const {params = {}} = navigation.state;
        return {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: '#78B6DD',
            borderBottomColor: '#fff',
            
        },
        headerTintColor: "#ffff",
        headerTitleStyle: {
            fontSize: 24
        },
        headerRight: (<OtherAccountPage />)
        }
      };

    state = { 
        userName: ''
    }
            
    constructor() {
        super();

        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userName: value
            });
        })
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!', event);
        this.props.navigation.navigate(event);
    }
    _headerImage =( ) => (
        <View>
            <Text>{this.state.userName.split('@')[0]}</Text>
            <Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />
            </View>
    )
   
    render() {
        const items = [
            { name: 'Provide Care', routeName:'ProvideCare' }, 
            { name: 'Medications', routeName:'Medications' },
            { name: 'Health Records', routeName:'HealthRecords' }, 
            { name: 'Insurance', routeName:'Insurance' },
            { name: 'Consent', routeName:'Consent' }, 
            { name: 'Legal', routeName:'Legal' }
          ];

        return (
                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                    <View style={[styles.itemContainer, { backgroundColor: '#78B6DD' }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                    )}
                />

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

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);

const styles = {
    gridView: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: 'white'
      },
      itemContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius: 5,
        paddingBottom: 10,
        height: 130,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
  };
