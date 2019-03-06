import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, AsyncStorage, ScrollView } from 'react-native';
import { ToggleSlider, Charts, Button, CardSection, headerBar } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addOtherVitals } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

class OtherVitalsPage extends Component { 
    static navigationOptions = () => (headerBar('OtherVitals'));
    
    state = {
        userId: '',
        noteText: '', 
        temp: 0,
        respiratory: 0,
        pulse: 0,

    }

    constructor() {
        super(); 
        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userId: value
            });
        }) 
    }

    _buttonPressHandler() {
        let data  = {
            id: 'OtherVitals',
            noteText: this.state.noteText, 
            temp: this.state.temp,
            respiratory: this.state.respiratory,
            pulse: this.state.pulse,
            userId: this.state.userId
        };
        this.props.postOtherVital(data);
        this.props.navigation.goBack();
    }

    _updateState(name, value) {
        if(name == 'Body Temp') {
            this.setState({ 
                temp :value 
            })
        } else if( name === 'Respiratory Rate') {
            this.setState({ 
                respiratory :value
            });
        } else if(name === 'Pulse Oxygen') {
            this.setState({ 
                pulse :value
            })
        }
    }
    
    render() {
        let items = [
            { name: 'Body Temp', icon: 'grin-hearts', value: this.state.temp }, 
            { name: 'Respiratory Rate', icon: 'grin-hearts', value: this.state.respiratory }, 
            { name: 'Pulse Oxygen', icon: 'grin-hearts', value: this.state.pulse }
          ];
        return (
            <View style={styles.container}>
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("MMM DD, YYYY")}
                </Text>
                <ScrollView> 
                    {   items.map((item) => 
                            (          
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10}}>
                                    <Text style={{fontSize:18, width: 150,  color: '#0077B5'}}>
                                        {item.name}  
                                    </Text>
                                    <TextInput 
                                        value={item.value}
                                        style={styles.inputStyle}
                                        onChangeText={ (value) => this._updateState(item.name, value)}
                                    />
                                </View>
                            )
                        )
                    }
                    
                    <AutoGrowTextArea 
                        self= {this}
                    />

                    <CardSection>
                        <Button 
                            style={styles.buttonStyle} 
                            onPress={this._buttonPressHandler.bind(this)}>
                            <Text style={styles.buttonTextStyle}>Save</Text>
                        </Button>
                    </CardSection>
                    <Charts 
                        uri= {'graphs'}
                    />
                </ScrollView>
            </View>
        );
    }
};

function mapStateToProps(state) {
    return {
      user: state.userReducer
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        postOtherVital: (otherVitalData) => dispatch(addOtherVitals(otherVitalData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (OtherVitalsPage);

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    buttonStyle: {
        backgroundColor:'#0077B5'
    },
    buttonTextStyle: {
        color: '#fff'
    },
    inputStyle: { 
        fontSize: 18, 
        borderWidth: 1,
        width: 60,
        borderColor: '#0077B5'
    },
    timeStyle: {
        color: '#0077B5', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
}