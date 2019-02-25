import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import Image from 'react-native-remote-svg'

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
            'careNotes'    : require('../../img/svg/provide-care-care-notes.svg'),
            'dailyCare'  : require('../../img/svg/provide-care-daily-care.svg'),
            'nutrition'    : require('../../img/svg/provide-care-nutrition.svg'),
            'shop'  : require('../../img/svg/provide-care-shop.svg'),
            'vaccinations'    : require('../../img/svg/provide-care-vaccinations.svg'),
            'medications'  : require('../../img/svg/provide-care-medications.svg')
        };
    }

    _buttonPressHandler(event) {
        console.log('Provide Care Pressed!', event);
        this.props.navigation.navigate(event);
    }
   
    render() {
        const items = [
            { name: 'Daily Care', routeName:'DailyVital', icon: this.icons['dailyCare'] }, 
            { name: 'Medications', routeName:'Medications', icon: this.icons['medications'] },
            { name: 'Care Note',  routeName:'CareNote', icon: this.icons['careNotes'] },
            { name: 'Care Circle', routeName:'CareCircle', icon: this.icons['vaccinations']},
            { name: 'Nutrition',  routeName:'MealPlan', icon: this.icons['nutrition'] },
            { name: 'Shop',  routeName:'HomeCare', icon: this.icons['shop'] },


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
        paddingTop: 40,
        backgroundColor: 'white',
        paddingLeft:10
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#78B6DD',
        height: 130,
        width: 150,
        marginBottom: 20
    },
    itemName: {
        fontSize: 16,
        color: '#78B6DD',
        fontWeight: '600',
    },
    buttonImage: {
        width: 90,
        height: 90
    }
};

