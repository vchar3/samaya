import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import GridView from 'react-native-super-grid';


class ProvideCarePage extends Component { 
    static navigationOptions = {
        title: 'Provide Care',
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
        console.log('Provide Care Pressed!', event);
        this.props.navigation.navigate(event);
    }
   
    render() {
        const items = [
            { name: 'Daily Care', code: '#1abc9c', routeName:'DailyVital' }, 
            { name: 'Home Care', code: '#2ecc71', routeName:'HomeCare' },
            { name: 'Meal Plan', code: '#34495e', routeName:'MealPlan' }, 
            { name: 'Medication', code: '#16a085', routeName:'Medication' },
            { name: 'Care Note', code: '#2c3e50', routeName:'CareNote' }
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

export default connect(mapStateToProps, mapDispatchToProps) (ProvideCarePage);

const styles = {
    gridView: {
        paddingTop: 25,
        flex: 1,
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

