import React, {Component}  from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import Modal from 'react-native-modal'; 
import moment from 'moment';
import OtherAccountPage from '../../OtherAccountPage';

class DailyVitalsPage extends Component { 
    static navigationOptions = {
        title: 'Daily Care',
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
        isBreakfastTaken: false,
        isLunchTaken: false,
        isDinnerTaken: false,
        isAssistanceNeeded: false,
        dateTimeNut: '',
        foodToday:'',
        todayFeeling: '',
        sysValue: 100,
        diaValue: 80,
        bpmValue:74,
        feeling: {
            isHappy: false,
            isSad: false,
            isTired: false,
            isSick: false,
            dateTime:''
        },
        bloodPressure: {
            sys:{ 
                minimumValue: 90,
                maximumValue: 160,
                step: 1
            },
            dia: { 
                diaMinimumValue: 60,
                diaMaximumValue: 90,
                diaStep: 1
            },
            bpm: { 
                bpmMinimumValue: 40,
                bpmMaximumValue: 240,
                bpmStep: 1
            },
            dateTime:''
        },
        bath: {
            isBathTaken: false,
            isAssistanceNeeded: false,
            dateTime:''
        },
        falls: {
            isFalls: false,
            number: 0,
            dateTime:''
        },
        otherVitals: {
            temp: 0,
            respiratory: 0,
            pulse: 0,
            dateTime:''
        }

    }

    _buttonPressHandler(event) {
        this.props.navigation.navigate(event);
    }

    render() {
        let bloodPressureValue = `Sys`+': '+this.state.sysValue+`\n`+`Dia`+ ': '+ this.state.diaValue+`\n`+`Bpm`+ ': '+ this.state.bpmValue
        console.log(bloodPressureValue);
        let breakfast= this.state.isBreakfastTaken ? <Text style={{color:'green'}}>Breakfast </Text> :  <Text style={{color:'grey'}}>Breakfast </Text> ;
        let lunch= this.state.isLunchTaken ? <Text style={{color:'green'}}>Lunch </Text> :  <Text style={{color:'grey'}}>Lunch </Text> ;
        let dinner= this.state.isDinnerTaken ? <Text style={{color:'green'}}>Dinner </Text> :  <Text style={{color:'grey'}}>Dinner </Text> ;

        let nutritionTitle = <Text>{breakfast }{`\n`}{lunch} {`\n`}{dinner}</Text>;

        let bath =this.state.bath.isBathTaken ? <Text style={{color:'green'}}>Bath </Text> :  <Text style={{color:'grey'}}>Bath </Text> ;

        let otherVital = `Body Temp`+': '+this.state.otherVitals.temp +`\n`+`Resp Rate`+ ': '+ this.state.otherVitals.respiratory +`\n`+`Pluse`+': '+this.state.otherVitals.pulse

        let items = [
            { name: 'Mood', routeName:'FeelingPage', value: this.state.todayFeeling,  updatedTime:this.state.feeling.dateTime, routeName: 'Feeling' }, 
            { name: 'Blood Pressure', routeName:'BloodPressure', value: bloodPressureValue,  updatedTime:this.state.bloodPressure.dateTime,  routeName: 'BloodPressure' },
            { name: 'Nutrition Intake', routeName:'Nutrition', value: nutritionTitle,   updatedTime:this.state.dateTimeNut,  routeName: 'Nutrition'},
            { name: 'Bath', routeName:'Bath', value: bath,  updatedTime:this.state.bath.dateTime,  routeName: 'Bath' }, 
            { name: 'Num of Falls', routeName:'Falls', value: this.state.falls.number,   updatedTime:this.state.falls.dateTime,  routeName: 'Falls' },
            { name: 'Other Vitals', routeName:'OtherVitals', value: otherVital,   updatedTime:this.state.otherVitals.dateTime,  routeName: 'OtherVitals' }
          ];

        return (
            <View style={styles.container}>
                {/* <Text style={{color: 'orange', fontSize: 16, textAlign:'center', padding:20}}> 
                    Today is {moment(new Date()).format("LT")}
                </Text> */}
              
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {   items.map((item) => 
                            (   
                                <View style={styles.containerBox}> 
                                    <TouchableHighlight 
                                        onPress={() => this._buttonPressHandler(item.routeName)}
                                        underlayColor="#f1f1f1">
                                        <View>
                                            <View style={styles.titleContainer}>    
                                                <Text style={styles.title}>{item.name}</Text>
                                                <View>
                                                    <Text style={styles.title}>{item.value}</Text> 
                                                    <Text>{item.updatedTime}</Text> 
                                                </View>
                                            </View>      
                                        </View>  
                                    </TouchableHighlight>  
                                </View>
                            )
                        )
                    
                    }
                </ScrollView> 
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
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    scrollContainer: {
        margin:10
    },
    titleContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        padding : 10,
        color   :'#ffff',
        fontWeight:'bold',
        fontSize:20
    },
    containerBox: {
        backgroundColor: '#78B6DD',
        margin:5,
        overflow:'hidden'
    }
};