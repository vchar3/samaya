import React, {Component}  from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import Modal from 'react-native-modal'; 
import moment from 'moment';

import {Feeling} from './Feeling';
import feelingChanges from './FeelingChanges';
import {BloodPressure} from './BloodPressure';
import {Nutrition} from './Nutrition';
import {BathPage} from './BathPage';
import {FallsPage} from './FallsPage';
import {OtherVitalsPage} from './OtherVitalsPage';

import OtherAccountPage from '../../OtherAccountPage';
import DropListCard from '../../../common/DropListCard';


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
            { name: 'Mood', routeName:'FeelingPage', value: this.state.todayFeeling, model: this._renderFeelingPage(), updatedTime:this.state.feeling.dateTime }, 
            { name: 'Blood Pressure', routeName:'BloodPressure', value: bloodPressureValue,  model: this._renderBloodPressure(), updatedTime:this.state.bloodPressure.dateTime },
            { name: 'Nutrition Intake', routeName:'Nutrition', value: nutritionTitle,  model: this._renderNutritionPage(), updatedTime:this.state.dateTimeNut},
            { name: 'Bath', routeName:'Bath', value: bath,  model: this._renderBathPage(), updatedTime:this.state.bath.dateTime }, 
            { name: 'Num of Falls', routeName:'Falls', value: this.state.falls.number,  model: this._renderFallsPage(), updatedTime:this.state.falls.dateTime },
            { name: 'Other Vitals', routeName:'OtherVitals', value: otherVital,  model: this._renderOtherVitalsPage(), updatedTime:this.state.otherVitals.dateTime }
          ];

        return (
            <View style={styles.container}>
                {/* <Text style={{color: 'orange', fontSize: 16, textAlign:'center', padding:20}}> 
                    Today is {moment(new Date()).format("LT")}
                </Text> */}
              
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {   items.map((item)=> (   
                        <DropListCard
                            title={item.name}
                            subTitle={item.value}
                            time={item.updatedTime}
                        >
                            {item.model}
                        </DropListCard>
                        ))
                    }
                </ScrollView> 
            </View>
        );
    }

    _renderFeelingPage=() => (
        <View> 
            <Feeling 
                    text='Save'
                    state= {this.state}
                    _checkBoxChanges= {(id, value) => feelingChanges(id, value, this)}
                />
        </View>
    )
    _renderBloodPressure=() => (
        <View> 
            <BloodPressure 
                self = {this}
            />
        </View>
    )
    _renderNutritionPage=() => (
        <View> 
            <Nutrition 
                self = {this}                  
            />
        </View>
    )
    _renderBathPage=() => (
        <View> 
            <BathPage 
                self = {this}                  
            />
        </View>
    )
    _renderFallsPage=() => (
        <View> 
            <FallsPage 
                self = {this}
            />
        </View>
    )
    _renderOtherVitalsPage=() => (
        <View> 
            <OtherVitalsPage 
                self = {this}
            />
        </View>
    )
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
    }
};