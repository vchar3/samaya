import React, {Component}  from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight,Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import Modal from 'react-native-modal'; 

import {Feeling} from './Feeling';
import feelingChanges from './FeelingChanges';
import {BloodPressure} from './BloodPressure';


class DailyVitalsPage extends Component { 
    static navigationOptions = {
        title: 'Daily Care',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#fff'
        },
        headerTintColor: "#ffff",
        headerRight: (<Image style={{marginRight: 15}} source={require('../../../../img/UserIcon.png')} />)
      };

    state = { 
        visibleModal: false,
        pageName: '',
        feeling: {
            isHappy: false,
            isSad: false,
            isTired: false,
            isSick: false
        },
        todayFeeling: '',
        sysValue: 100,
        diaValue: 70,
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
            }
        }
    }

    render() {
        let bloodPressureValue = `Sys/mmHg`+': '+this.state.sysValue+`\n`+`Dia/mmHg`+ ': '+ this.state.diaValue
        let items = [
            { name: 'Feeling', routeName:'FeelingPage', value: this.state.todayFeeling }, 
            { name: 'Blood Pressure', routeName:'BloodPressure', value: bloodPressureValue },
            { name: 'Body Temp', routeName:'BodyTemp', value: '98.2 F' },
            { name: 'Respiratory Rate', routeName:'Respiratory', value: '18' }, 
            { name: 'Pulse Oxygen', routeName:'PulseOxygen', value: '95' },
            { name: 'Num time today', routeName:'NumTime', value: '0' }
          ];

        return (
            <View style={{ flex: 1, backgroundColor: '#4B91CD' }}>
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
                    text='Close'
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
                    text='Save'
                    state = {this.state}
                    self = {this}
                    _changeSysBloodPressure = {(sysValue) => this._changeSysBloodPressure(sysValue)}
                    _changeDiaBloodPressure = {(daiValue) => this._changeDiaBloodPressure(daiValue)}
                    onPress= { () => this.setState({ visibleModal: false, pageName: ''})}/>
                : null 
        }
        </View>
    );

    _buttonPressHandler(event) {
        console.log('Feeling Pressed!', this.setState );
        if(event === 'FeelingPage') {
            this.setState({ 
                visibleModal: true,
                pageName: event})
        } else if(event === 'BloodPressure'){
            this.setState({ 
                visibleModal: true,
                pageName: event})
        }
    }

    _changeSysBloodPressure(sysValue) {
        if(sysValue) {
            this.setState({
                sysValue: sysValue
            })
        }
    }
    _changeDiaBloodPressure(daiValue) {
        if(daiValue) {
            this.setState({
                diaValue: daiValue
            })
        }
        
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
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
};