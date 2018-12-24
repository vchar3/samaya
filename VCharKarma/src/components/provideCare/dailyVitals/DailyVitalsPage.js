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
        visibleModal: false,
        pageName: '',
        isBreakfastTaken: false,
        isLunchTaken: false,
        isDinnerTaken: false,
        isAssistanceNeeded: false,
        foodToday:'',
        todayFeeling: '',
        sysValue: 100,
        diaValue: 80,
        bpmValue:74,
        feeling: {
            isHappy: false,
            isSad: false,
            isTired: false,
            isSick: false
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
            }
        },
        bath: {
            isBathTaken: false,
            isAssistanceNeeded: false
        },
        falls: {
            isFalls: false,
            number: 0
        },
        otherVitals: {
            temp: 0,
            respiratory: 0,
            pulse: 0
        }

    }

    render() {
        let bloodPressureValue = `Sys`+': '+this.state.sysValue+`\n`+`Dia`+ ': '+ this.state.diaValue+`\n`+`Bpm`+ ': '+ this.state.bpmValue

        let breakfast= this.state.isBreakfastTaken ? <Text style={{color:'green'}}>Breakfast </Text> :  <Text style={{color:'grey'}}>Breakfast </Text> ;
        let lunch= this.state.isLunchTaken ? <Text style={{color:'green'}}>Lunch </Text> :  <Text style={{color:'grey'}}>Lunch </Text> ;
        let dinner= this.state.isDinnerTaken ? <Text style={{color:'green'}}>Dinner </Text> :  <Text style={{color:'grey'}}>Dinner </Text> ;

        let nutritionTitle = <Text>{breakfast }{`\n`}{lunch} {`\n`}{dinner}</Text>;

        let bath =this.state.bath.isBathTaken ? <Text style={{color:'green'}}>Bath </Text> :  <Text style={{color:'grey'}}>Bath </Text> ;

        let otherVital = `Body Temp`+': '+this.state.otherVitals.temp +`\n`+`Resp Rate`+ ': '+ this.state.otherVitals.respiratory +`\n`+`Pluse`+': '+this.state.otherVitals.pulse

        let items = [
            { name: 'Feeling', routeName:'FeelingPage', value: this.state.todayFeeling }, 
            { name: 'Blood Pressure', routeName:'BloodPressure', value: bloodPressureValue },
            { name: 'Nutrition Intake', routeName:'Nutrition', value: nutritionTitle },
            { name: 'Bath', routeName:'Bath', value: bath }, 
            { name: 'Num of Falls', routeName:'Falls', value: this.state.falls.number },
            { name: 'Other Vitals', routeName:'OtherVitals', value: otherVital }
          ];

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* <Text style={{color: 'orange', fontSize: 16, textAlign:'center', padding:20}}> 
                    Today is {moment(new Date()).format("MMMM Do, YYYY")}
                </Text> */}
              
                <ScrollView contentContainerStyle={{margin:10}}>
                    {   items.map((item)=> (      
                        <DropListCard
                            title={item.name}
                            subTitle='140/82'
                            time='03/30' 
                        >
                        <Text style={{color   :'#ffff',}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </DropListCard>
                        
                        ))
                    }
                </ScrollView>
            
                <GridView
                    itemDimension={130}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                    <TouchableOpacity  onPress={() => this._buttonPressHandler(item.routeName)}>
                    <View style={[styles.itemContainer, { backgroundColor: '#78B6DD' }]}>
                        <Text style={styles.itemCode}>{item.value}</Text>
                        <Text style={styles.itemName}>{item.name}</Text>
                        
                    </View>
                    </TouchableOpacity>
                )}/>

                <Modal
                    isVisible={this.state.visibleModal}
                    backdropColor={'#2FAEE0'}
                    backdropOpacity={1}
                    animationIn={'zoomInDown'}
                    animationOut={'zoomOutUp'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}>
                    
                    {this._renderModalContent()}
                </Modal>
               
            </View>
        );
    }

    _renderModalContent = () => (
        <View>
        {
            this.state.pageName === 'FeelingPage' 
                ? <Feeling 
                    text='Save'
                    state= {this.state}
                    _checkBoxChanges= {(id, value) => feelingChanges(id, value, this)}
                    onPress= { () => {
                        this.setState({ visibleModal: false, pageName: ''})
                    }}/>
                : null 
        }
        {
            this.state.pageName === 'BloodPressure' 
                ? 
                <BloodPressure 
                    self = {this}
                />
                : null 
        }
        {
            this.state.pageName === 'Nutrition' 
                ? 
                <Nutrition 
                    self = {this}
                    onPress= { () => this.setState({ visibleModal: false, pageName: ''})}/>
                : null 
        }
        {
            this.state.pageName === 'Bath' 
                ? 
                <BathPage 
                    self = {this}
                    onPress= { () => this.setState({ visibleModal: false, pageName: ''})}/>
                : null 
        }
        {
            this.state.pageName === 'Falls' 
                ? 
                <FallsPage 
                    self = {this}
                    onPress= { () => this.setState({ visibleModal: false, pageName: ''})}/>
                : null 
        }
         {
            this.state.pageName === 'OtherVitals' 
                ? 
                <OtherVitalsPage 
                    self = {this}
                    onPress= { () => this.setState({ visibleModal: false, pageName: ''})}/>
                : null 
        }
        </View>
    );

    _buttonPressHandler(event) {
        this.setState({ 
            visibleModal: true,
            pageName: event});
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
        flex: 1,
        paddingTop: 0,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
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
        width: 150,
        fontWeight: '600',
        fontSize: 20,
        color: '#fff'
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
};