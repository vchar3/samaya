import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Button } from '../common/index';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

import OtherAccountPage from './OtherAccountPage';
import { getMedicationList } from '../../redux/actions/medicationAction';
import { CalendarView } from './medication/CalendarView';
import { ListView } from './medication/ListView';

class MedicationsPage extends Component { 
      static navigationOptions = ({navigation}) =>{
        const {params = {}} = navigation.state;
        return {
        title: 'Medications',
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
        userId: ''
    }


    constructor() {
        super();
        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userId: value,
                showModel: false
            });
            this.props.getMedication(value);
        }) 

    }

    _addUserHandler( ){
        this.props.navigation.navigate('AddMedications');
    }

    _listViewHandler() {
        this.setState({
            showModel: true
        })
    }
   
    _calendarViewHandler() {
        this.setState({
            showModel: false
        })
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', paddingTop: 10}}> 
                    <TouchableOpacity onPress={this._calendarViewHandler.bind(this)}>
                        <View style={styles.rowButton}>
                            <Text style={styles.rowButtonTextStyle}>Calendar View</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._listViewHandler.bind(this)}>
                        <View style={styles.rowButton}>
                            <Text style={styles.rowButtonTextStyle}>List View</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._addUserHandler.bind(this)}>
                        <View style={styles.rowButton}>
                            <Text style={styles.rowButtonTextStyle}>Add Medication</Text>
                        </View>
                    </TouchableOpacity>  
                </View>
                <View >
                    {
                        this.state.showModel ? <ListView /> : <CalendarView />
                    }
                </View>
                
            </View>
        );
    }
}

function mapStateToProps(state) {
    let medications;

    if(state.medicationReducer.medicationData) {
        medications = state.medicationReducer.medicationData.data
    }
    return {
      user: state.userReducer
    }
  }
  
function mapDispatchToProps(dispatch) {
return {
    getMedication: (userId) => dispatch(getMedicationList(userId))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (MedicationsPage);

const styles = {
    container: {     
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    calendarStyle: {
        width: 300, 
        borderWidth: 1,
        borderColor: 'gray'
    },
    itemsStyle: {
        width: 300,
        height: 300,
        marginTop: 15,
    },
    cardStyle: {
        width: 300,
        height: 170
    },
    headerStyle: {
       fontSize: 18
    },
    userButton: {
        backgroundColor: 'blue',
        marginTop: 15,
        width:300,
        height: 50,
        justifyContent: 'center',

    },
    button: {
        backgroundColor: 'lightblue',
        width: 300,
        padding: 12,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      buttonTextStyle: {
        fontWeight:'bold', 
        color: 'white', 
        fontSize: 18
      },
      rowButton: {
        backgroundColor: 'lightblue',
        width: 120,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      rowButtonTextStyle: {
        fontWeight:'bold', 
        color: 'white', 
        fontSize: 12
      }
  };
