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
    constructor() {
        super();

        this.icons = { 
            'careNotes'    : require('../../img/careNotes.png'),
            'dailyCare'  : require('../../img/dailyCare.png'),
            'nutrition'    : require('../../img/nutrition.png'),
            'shop'  : require('../../img/shop.png'),
            'vaccinations'    : require('../../img/vaccinations.png'),
            'medications'  : require('../../img/medications.png')
        };
    }

    _buttonPressHandler(event) {
        console.log('Provide Care Pressed!', event);
        this.props.navigation.navigate(event);
    }
   
    render() {
        const items = [
            { name: 'Daily Care', routeName:'DailyVital', icon: this.icons['dailyCare'] }, 
            { name: 'Home Care',  routeName:'HomeCare', icon: this.icons['shop'] },
            { name: 'Meal Plan',  routeName:'MealPlan', icon: this.icons['nutrition'] }, 
            { name: 'Medication', routeName:'Medication', icon: this.icons['medications'] },
            { name: 'Care Note',  routeName:'CareNote', icon: this.icons['careNotes'] },
            { name: 'Care Circle', routeName:'CareCircle', icon: this.icons['vaccinations']}
          ];

        return (

            <GridView
                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                <View style={[styles.itemContainer, { backgroundColor: '#ffff' }]}>
                    <Image
                        style={styles.buttonImage}
                        source={item.icon}
                        ></Image>
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
        alignItems: 'center',
        borderRadius: 5,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#78B6DD',
        height: 130,
    },
    itemName: {
        fontSize: 16,
        color: '#78B6DD',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    buttonImage: {
        width: 90,
        height: 90
    }
};

