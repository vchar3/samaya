import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions';
import GridView from 'react-native-super-grid';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import FooterBar from '../common/FooterBar';
import { BottomNavBar } from '../common/index';
import {BottomTabBar} from '../navigators/AppNavigator';

class HomePage extends Component { 
    static navigationOptions = {
        title: 'Home',
      };

    state = { 
        cardList: [
            {'image': '../../img/flower.jpeg', 'title': 'Home', 'id': 1},
            {'image': '../../img/flower2.jpeg', 'title': 'Home', 'id': 2},
            {'image': '../../img/flower.jpeg', 'title': 'Home', 'id': 3},
         ]
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!', event);
        this.props.navigation.navigate(event);
    }
   
    render() {
        //let { } = this.state;
        const items = [
            { name: 'Provide Care', code: '#1abc9c', routeName:'ProvideCare' }, 
            { name: 'Medications', code: '#2ecc71', routeName:'Medications' },
            { name: 'Health Records', code: '#34495e', routeName:'HealthRecords' }, 
            { name: 'Insurance', code: '#16a085', routeName:'Insurance' },
            { name: 'Consent', code: '#8e44ad', routeName:'Consent' }, 
            { name: 'Legal', code: '#2c3e50', routeName:'Legal' }
          ];

        return (
            <View style={{ flex: 1 }}>
                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        {/* <Text style={styles.itemCode}>{item.code}</Text> */}
                    </View>
                    </TouchableOpacity>
                    )}
                />
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

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);

const styles = {
    gridView: {
        paddingTop: 25,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
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
    }
  };
