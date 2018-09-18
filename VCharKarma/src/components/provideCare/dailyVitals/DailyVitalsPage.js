import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions';
import GridView from 'react-native-super-grid';



class DailyVitalsPage extends Component { 
    static navigationOptions = {
        title: 'Daily Vitals',
      };

    state = { 
        
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        this.props.navigation.dispatch({type: 'Login'});
    }
   
    render() {
        const items = [
            { name: 'Feeling', code: '#1abc9c', routeName:'Feeling', value: 'Good' }, 
            { name: 'Blood Pressure', code: '#2ecc71', routeName:'BloodPressure', value: '120' },
            { name: 'Pulse', code: '#34495e', routeName:'Pulse', value: '80' }, 
            { name: 'Body Temp', code: '#16a085', routeName:'BodyTemp', value: '98.2 F' },
            { name: 'Respiratory Rate', code: '#34495e', routeName:'Respiratory', value: '18' }, 
            { name: 'Pulse Oxygen', code: '#16a085', routeName:'PulseOxygen', value: '95' },
            { name: 'Num time today', code: '#16a085', routeName:'NumTime', value: '0' }
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
                    <Text style={styles.itemCode}>{item.value}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps) (DailyVitalsPage);

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
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 20,
        color: '#fff',
    }
};