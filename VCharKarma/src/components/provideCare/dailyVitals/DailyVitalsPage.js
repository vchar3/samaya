import React, {Component}  from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions';
import GridView from 'react-native-super-grid';
import Modal from 'react-native-modal'; 

import {Feeling} from './Feeling';
import {BloodPressure} from './BloodPressure';

class DailyVitalsPage extends Component { 
    static navigationOptions = {
        title: 'Daily Vitals',
      };

    state = { 
        visibleModal: false,
        pageName: ''
    }


    _renderModalContent = () => (
        <View>
        {
            this.state.pageName === 'FeelingPage' 
                ? <Feeling 
                    text='Close'
                    onPress= { () => this.setState({ visibleModal: false, pageName: ''})}/>
                : null 
        }
        {
            this.state.pageName === 'BloodPressure' 
                ? <BloodPressure 
                    text='Close'
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

    render() {
        const items = [
            { name: 'Feeling', code: '#1abc9c', routeName:'FeelingPage', value: 'Good' }, 
            { name: 'Blood Pressure', code: '#2ecc71', routeName:'BloodPressure', value: '120' },
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