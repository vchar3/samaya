import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage, Dimensions, Image  } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import NotificationController from '../common/NotificationController';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import FooterBar from '../common/FooterBar';
import { headerBar } from '../common/index';
import {BottomTabBar} from '../navigators/AppNavigator';

import OtherAccountPage from './OtherAccountPage';
import SVGImage from '../common/SVGImage';

class HomePage extends Component { 
    static navigationOptions = () => (headerBar('Welcome'));

    state = { 
        userName: ''
    }
            
    constructor() {
        super();

        this.icons = { 
            'provideCare'    : require('../../img/svg/homeProvideCare.svg'),
            'appointments'  : require('../../img/svg/home-appointments.svg'),
            'consent'    : require('../../img/svg/home-consent.svg'),
            'healthRecords'  : require('../../img/svg/home-health-records.svg'),
            'insurance'    : require('../../img/svg/home-insurance.svg'),
            'legal'  : require('../../img/svg/home-legal.svg')
        };
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
            { name: 'Provide Care', routeName:'ProvideCare' , icon: this.icons['provideCare']}, 
            { name: 'Appointments', routeName:'Appointments', icon: this.icons['appointments']},
            { name: 'Health Records', routeName:'HealthRecords', icon: this.icons['healthRecords'] }, 
            { name: 'Insurance', routeName:'Insurance', icon: this.icons['insurance'] },
            { name: 'Consent', routeName:'Consent', icon: this.icons['consent'] }, 
            { name: 'Legal', routeName:'Legal', icon: this.icons['legal'] }
          ];

        return (
            <View style={{flex:1}}>
                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                    <View style={[styles.itemContainer, { backgroundColor: '#ffff' }]}>
                        <SVGImage
                            style={styles.buttonImage}
                            source={item.icon}
                        />
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                    )}
                />
                <NotificationController />
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

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);

const styles = {
    gridView: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: 'white',
        paddingLeft:10
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#0077B5',
        height: 130,
        width: 150,
        marginBottom: 20
    },
    itemName: {
        fontSize: 16,
        color: '#0077B5',
        fontWeight: '600',
    },
    buttonImage: {
        width: 90,
        height: 90,
    }
  };
