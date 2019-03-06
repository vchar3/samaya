import React, {Component}  from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import { fetchDataFromAPI, getUserLogin } from '../../../../redux/actions/actions';
import GridView from 'react-native-super-grid';
import Modal from 'react-native-modal'; 
import moment from 'moment';
import OtherAccountPage from '../../OtherAccountPage';
import {randomColor} from 'randomcolor';
import {headerBar} from '../../../common/index';

class DailyVitalsPage extends Component { 
    static navigationOptions = () => (headerBar('Daily Care'));

    _buttonPressHandler(event) {
        this.props.navigation.navigate(event);
    }

    render() {
        let items = [
            { name: 'Mood', routeName:'Feeling', icon: 'smile-o' }, 
            { name: 'Blood Pressure', routeName:'BloodPressure', icon: 'heartbeat'  },
            { name: 'Nutrition Intake', routeName:'Nutrition', icon: 'apple' },
            { name: 'Bath', routeName:'Bath', icon: 'bathtub'  }, 
            { name: 'Fall', routeName:'Falls', icon: 'bicycle' },
            { name: 'Other Vitals', routeName:'OtherVitals', icon: 'angellist'  }
          ];

        return (
            <View style={styles.container}>
                {/* <Text style={{color: 'orange', fontSize: 16, textAlign:'center', padding:20}}> 
                    Today is {moment(new Date()).format("LT")}
                </Text> */}
              
                <ScrollView>
                    {   items.map((item) => 
                            (   
                                <TouchableHighlight 
                                    onPress={() => this._buttonPressHandler(item.routeName)} >
                                    <View style={[styles.containerBox, {backgroundColor: '#0077B5'}]}> 
                                        <FontAwesome name={item.icon} size={50} color={'white'} /> 
                                        <Text style={styles.title}>{item.name}</Text>  
                                        <Feather name='chevron-right' size={50} color={'white'} /> 
                                    </View>
                                </TouchableHighlight> 
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
    title: {
        padding : 10,
        color   :'#ffff',
        fontWeight:'bold',
        fontSize:22
    },
    containerBox: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: '#FFFF'
    }
};