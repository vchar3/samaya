import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import GridView from 'react-native-super-grid';

import OtherAccountPage from './OtherAccountPage';


class ProvideCarePage extends Component { 
    static navigationOptions = {
        title: 'Provide Care',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#fff'
        },
        headerTitleStyle: {
            fontSize: 24
        },
        headerTintColor: "#ffff",
        headerRight: (<OtherAccountPage />)
      };

    state = { 

    }

    _buttonPressHandler(event) {
        console.log('Provide Care Pressed!', event);
        this.props.navigation.navigate(event);
    }
   
    render() {
        const items = [
            { name: 'Daily Care', routeName:'DailyVital' }, 
            { name: 'Home Care',  routeName:'HomeCare' },
            { name: 'Meal Plan',  routeName:'MealPlan' }, 
            { name: 'Medication', routeName:'Medication' },
            { name: 'Care Note',  routeName:'CareNote' },
            { name: 'Care Circle', routeName:'CareCircle'}
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
                    {/* <Text style={styles.itemCode}>{item.code}</Text> */}
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

export default connect(mapStateToProps, mapDispatchToProps) (ProvideCarePage);

const styles = {
    gridView: {
        flex: 1,
        paddingTop: 60,
        backgroundColor: 'white',

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
    }
};

