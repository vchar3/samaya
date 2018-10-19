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
import moment from 'moment';

class HomePage extends Component { 
    static navigationOptions = ({navigation}) =>{
        const {params = {}} = navigation.state;
        return {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: '#78B6DD',
            borderBottomColor: '#fff'
        },
        headerTintColor: "#ffff",
        headerRight: (<Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />)
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
            <View style={{ flex: 1, backgroundColor: '#4B91CD' }}>
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
                {/* <Text style={{color: 'orange', fontSize: 16}}> Today is {moment(new Date()).format("MMMM Do, YYYY")}</Text> */}
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
        flex: 1
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
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
    container: {     
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

      },
      card : {
        flex: 1,
      },
      cardImage: {

      },
      press : {
        flex: 1, 
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10, 
        width: 150, 
        height: 110
      },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1

    },
    inputStyle: {
        height:40, 
        flex: 1,  
        fontSize: 18, 
        borderWidth: 1, 
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    imageStyle: {
        width: 25, 
        height: 25     
    },
    imageContainerStyle: {
        padding: 10,
        flexDirection:'row',
        backgroundColor: '#fff'
    },
  };
