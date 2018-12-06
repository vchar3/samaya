import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { getListOfConsent, updateConsentRecord } from '../../redux/actions/consentsAction';
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
                        this.updateRecords(element, this.state.allInformationList, element.allInformation.value, 'allInformationList', 'allInformation');
                    } 
                  
                    if(element.dailyVitals) {                                        
                        this.updateRecords(element, this.state.dailyVitalsList, element.dailyVitals.value, 'dailyVitalsList', 'dailyVitals');
                    }

                    if(element.homeCareNotes) {                    
                        this.updateRecords(element, this.state.homeCareNotesList, element.homeCareNotes.value, 'homeCareNotesList', 'homeCareNotes');
                    }

                    if(element.medicalRecords) {                    
                        this.updateRecords(element, this.state.medicalRecordsList, element.medicalRecords.value, 'medicalRecordsList', 'medicalRecords');
                    }

                    if(element.medication) {                   
                    this.updateRecords(element, this.state.medicationList, element.medication.value, 'medicationList', 'medication');
                    }
                  }, this);
            } 
        }
    }

    updateRecords(element, itemList, itemValue, listName, id) {
        let detailInfo = {
            id: element._id,
            name: element.name,
            value: itemValue,
            recordName: id
        };
        let record = itemList; 
        record.push(detailInfo);

        this.setState({
            listName: record
        })
    }

    _toggleSwitchHandler(value, item, id) {
        if(item.recordName === 'allInformation') {
            this.updateList(this.state.allInformationList, item, value);
        } else if( item.recordName === 'dailyVitals') {
            this.updateList(this.state.dailyVitalsList, item, value);
        } else if( item.recordName === 'homeCareNotes') {
            this.updateList(this.state.homeCareNotesList, item, value);
        } else if( item.recordName === 'medicalRecords') {
            this.updateList(this.state.medicalRecordsList, item, value);
        } else if( item.recordName === 'medication') {
            this.updateList(this.state.medicationList, item, value);
        }
        this.setState({isActive: value})
    }

    updateList(lists, item, value) {
        for (var i in lists) {
            if(lists[i].id === item.id) {
                let recordData = {
                    userObjectId : this.props.userObjectId,
                    recordId: lists[i].id,
                    value: value,
                    recordName: item.recordName
                }
                console.log('rcord: ', recordData)
                this.props.updateRecord(recordData);
                lists[i].value = value
                break;
            }
        }
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
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value, item)}
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
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value, item)}
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
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value, item)}
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
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value, item)}
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
                        toggleSwitchHandler= {(value) => this._toggleSwitchHandler(value, item, 'medication')}
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
    let consent, id;
    if(state.consentsReducer.consentData){
        consent = state.consentsReducer.consentData.data.consentList
        id = state.consentsReducer.consentData.data.userObjectId
    }
    return {
        listOfConsent :consent,
        userObjectId: id 
    };
  }
  
function mapDispatchToProps(dispatch) {
return {
    getConsentList: (userId) => dispatch(getListOfConsent(userId)),
    updateRecord: (record) => dispatch(updateConsentRecord(record))
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
        maxHeight: 200,
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
