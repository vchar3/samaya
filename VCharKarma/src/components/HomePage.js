import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import FooterBar from '../common/FooterBar';
import { BottomNavBar } from '../common/index';
import {BottomTabBar} from '../navigators/AppNavigator';
import moment from 'moment';

class HomePage extends Component { 
    static navigationOptions = ({navigation}) =>{
        const {params = {}} = navigation.state;
        console.log('navigation', navigation, params)
        return {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: '#7DBADF',
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
        //let { } = this.state;
        const items = [
            { name: 'Provide Care', code: '#2094DA', routeName:'ProvideCare' }, 
            { name: 'Medications', code: '#2094DA', routeName:'Medications' },
            { name: 'Health Records', code: '#2094DA', routeName:'HealthRecords' }, 
            { name: 'Insurance', code: '#2094DA', routeName:'Insurance' },
            { name: 'Consent', code: '#2094DA', routeName:'Consent' }, 
            { name: 'Legal', code: '#2094DA', routeName:'Legal' }
          ];

        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }} 
                    >
                    <Image
                        source={require('../../img/BackgroundScreen.png')}
                    />

                </View>
                {/* <View style={styles.imageContainerStyle}>
                    <View style={{justifyContent:'flex-start', flexDirection:'row'}}>
                    <Image style={styles.imageStyle}
                        defaultSource={require('../../img/default.png')}/>
                    <Text style={{marginLeft: 5, color: 'green', fontSize: 20,}}>
                        {this.state.userName.split('@')[0]} </Text>
                    </View>
                    <Text style={{color: 'orange', fontSize: 16}}> Today is {moment(new Date()).format("MMMM Do, YYYY")}</Text>
                </View> */}
                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                    )}
                />
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
        borderRadius: 5,
        padding: 10,
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
