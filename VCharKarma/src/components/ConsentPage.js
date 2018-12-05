import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { getListOfConsent } from '../../redux/actions/consentsAction';
import { ToggleSlider } from '../common/index';
import FooterBar from '../common/FooterBar';



class ConsentPage extends Component { 
    static navigationOptions = {
        title: 'Consent',
      };

    state = { 
         isActive: false,
         userEmail: '',
         allInformationList: [],
         dailyVitalsList: [],
         homeCareNotesList: [],
         medicalRecordsList: [],
         medicationList: []
    }

    constructor() {
        super();
        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userEmail: value
            });
            this.props.getConsentList(value);
        })      
    }

    componentDidUpdate(prevProps) {        
        if(this.props.listOfConsent  && this.props.listOfConsent !== prevProps.listOfConsent) {
            let consentDetails = this.props.listOfConsent ;
            console.log("list of consent", this.props.listOfConsent);
            if (consentDetails) {
                consentDetails.forEach(function(element) {
                    if(element.allInformation) {
                        let listData = this.state.allInformationList;                    
                        let information = {
                            name: element.name,
                            value: element.allInformation.value
                        };
                        listData.push(information);

                        this.setState({
                            allInformationList: listData
                        })
                    } 
                  
                    if(element.dailyVitals) {
                        let listData = this.state.dailyVitalsList;                    
                        let information = {
                            name: element.name,
                            value: element.dailyVitals.value
                        };
                        listData.push(information);

                        this.setState({
                            dailyVitalsList: listData
                        })
                    }

                    if(element.homeCareNotes) {
                        let listData = this.state.homeCareNotesList;                    
                        let information = {
                            name: element.name,
                            value: element.homeCareNotes.value
                        };
                        listData.push(information);

                        this.setState({
                            homeCareNotesList: listData
                        })
                    }

                    if(element.medicalRecords) {
                        let listData = this.state.medicalRecordsList;                    
                        let information = {
                            name: element.name,
                            value: element.medicalRecords.value
                        };
                        listData.push(information);

                        this.setState({
                            medicalRecordsList: listData
                        })
                    }

                     if(element.medication) {
                        let listData = this.state.medicationList;                    
                        let information = {
                            name: element.name,
                            value: element.medication.value
                        };
                        listData.push(information);

                        this.setState({
                            medicationList: listData
                        })
                     }
                  }, this);
            } 
        }
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        //this.props.navigation.dispatch({type: 'Login'});
    }
    _toggleSwitchHandler(value) {
        console.log(value);
       this.setState({isActive: value})
    }


   
    render() {

        return (
            <View style= {styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>All Health Information </Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { this.state.allInformationList.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {item.value}
                    />

                ))}
                </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Daily Vitals </Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { this.state.dailyVitalsList.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {item.value}
                    />

                ))}
                 </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Home Care Notes</Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { this.state.homeCareNotesList.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {item.value}
                    />

                ))}
                 </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Medical Records</Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { this.state.medicalRecordsList.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {item.value}
                    />

                ))}
                 </ScrollView>
                </View>

                <View style={styles.bodyContainer}>
                <Text style={styles.textStyle}>Medication </Text>
                <ScrollView contentContainerStyle={styles.contain}>
                { this.state.medicationList.map((item, index) => (

                    <ToggleSlider 
                        textLabel = {item.name}
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value)}
                        isActive = {item.value}
                    />

                ))}
                 </ScrollView>
                </View>
                
            </ScrollView>
           
            {/* <FooterBar /> */}
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log("state data", state)
    let consent;
    if(state.consentsReducer.consentData){
        consent = state.consentsReducer.consentData.data.consentList
        
    }
    return {
        listOfConsent :consent 
    };
  }
  
function mapDispatchToProps(dispatch) {
return {
    getConsentList: (userId) => dispatch(getListOfConsent(userId))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (ConsentPage);

const styles = {
    mainContainer: {
        flex: 1
    },
    container: {   
        marginTop: 15,  
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingBottom: 30
    },
    bodyContainer: {
        height: 200,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 7.5, 
        marginTop: 7.5, 
        // backgroundColor: 'green'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 10

    },
    contain: {
        
    }
  };
