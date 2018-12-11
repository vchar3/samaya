import React, { Component }  from 'react';
import {Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {connect} from 'react-redux';
import OtherAccountPage from './OtherAccountPage';

class AddMedicationsPage extends Component {
    static navigationOptions = ({navigation}) =>{
        const {params = {}} = navigation.state;
        return {
            title: 'Add Medication',
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
        medicationName: '',
        dosage: '',
        rxNumber: '',
        quantity: '',
        prescDate: '',
        refileLeft: '',
        dateFilled: '',
        discardAfter: '',
        pharmacyName: '',
        storePhone: '',
        prescribedBy: '',
        setDate: null
    }

    _addMedication(){
        console.log("Add Medication")
    }

    render() {

        let { medicationName, dosage, rxNumber, quantity, prescDate, refileLeft, dateFilled, discardAfter, pharmacyName, storePhone, prescribedBy} = this.state;
        return (
            <View style={styles.modalContent}>
                <View style={styles.tapBar}>
                    <TouchableOpacity style={styles.tapButton} onPress= { () => this._addMedication()}>
                            <Text style={styles.tapButtonTextStyle}>{'Scan your pill bottle label'}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <TextField
                        label='Medication Name'
                        value={medicationName}
                        onChangeText={ (medicationName) => this.setState({ medicationName }) }
                    />
                    <TextField
                        label='Dosage (e.g. 10mg, 500 IU'
                        value={dosage}
                        onChangeText={ (dosage) => this.setState({ dosage }) }
                    />
                    <TextField
                        label='Rx Number'
                        value={rxNumber}
                        onChangeText={ (rxNumber) => this.setState({ rxNumber }) }
                    />
                    <TextField
                        label='Quantity'
                        value={quantity}
                        onChangeText={ (quantity) => this.setState({ quantity }) }
                    />
                    <TextField
                        label='Prescription Date'
                        value={prescDate}
                        onChangeText={ (prescDate) => this.setState({ prescDate }) }
                    />
                    <TextField
                        label='Number Refile Left'
                        value={refileLeft}
                        onChangeText={ (refileLeft) => this.setState({ refileLeft }) }
                    />  
                    <TextField
                        label='Date Filled'
                        value={dateFilled}
                        onChangeText={ (dateFilled) => this.setState({ dateFilled }) }
                    />
                    <TextField
                        label='Discard after'
                        value={discardAfter}
                        onChangeText={ (discardAfter) => this.setState({ discardAfter }) }
                    />
                    <TextField
                        label='Pharmacy'
                        value={pharmacyName}
                        onChangeText={ (pharmacyName) => this.setState({ pharmacyName }) }
                    />
                    <TextField
                        label='Store phone'
                        value={storePhone}
                        onChangeText={ (storePhone) => this.setState({ storePhone }) }
                    />
                    <TextField
                        label='Prescribed By'
                        value={prescribedBy}
                        onChangeText={ (prescribedBy) => this.setState({ prescribedBy }) }
                    />

                </ScrollView>
                <TouchableOpacity onPress= { () => this._addMedication()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonTextStyle}>{'Save'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
export default (AddMedicationsPage);

const styles = { 

    modalContent: {
        backgroundColor: 'white',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        flex: 1,

    },
    button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
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
    tapButton: {
        backgroundColor: 'lightblue',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(1, 0, 1, 0.1)',
    },
    tapButtonTextStyle: {
        fontWeight:'bold', 
        color: 'white', 
        fontSize: 17,
        textAlign: 'center'
    },
    scrollContainer: {
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 15

    },
    tapBar: {
        padding: 15,
    }

};