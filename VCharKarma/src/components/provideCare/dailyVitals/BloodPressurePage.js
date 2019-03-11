import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { Slider } from 'react-native-elements';
import { Charts, headerBar, Button, CardSection } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addBloodPressure } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class BloodPressurePage extends Component { 
    static navigationOptions = () => (headerBar('Blood Pressure'));

    state = {
        userId: '',
        noteText: '', 
        sysValue: 100,
        diaValue: 80,
        bpmValue:74,
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
        isShowMore: false
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
        let data = {
            id: 'BloodPressure',
            noteText: this.state.noteText, 
            sysValue: this.state.sysValue,
            diaValue: this.state.diaValue,
            bpmValue: this.state.bpmValue,
            sys:{ 
                minimumValue: this.state.sys.minimumValue,
                maximumValue: this.state.sys.maximumValue,
                step: this.state.sys.step
            },
            dia: { 
                diaMinimumValue: this.state.dia.diaMinimumValue,
                diaMaximumValue: this.state.dia.diaMaximumValue,
                diaStep: this.state.dia.diaStep
            },
            bpm: { 
                bpmMinimumValue: this.state.bpm.bpmMinimumValue,
                bpmMaximumValue: this.state.bpm.bpmMaximumValue,
                bpmStep: this.state.bpm.bpmStep
            },
            userId: this.state.userId
        };
        this.props.postBloodPressure(data);
        this.props.navigation.goBack();
    }

    _updateHandler(value, name) {
        if(name === 'SYS') {
            this.setState({ sysValue: value }) ;
        } else if(name === 'DIA') {
            this.setState({diaValue: value});
        } else if(name === 'BPM') {
            this.setState({ bpmValue: value });
        }
    }

    _showHideChart() {
        this.setState({
            isShowMore : !this.state.isShowMore
        })
    }

    render() {
        let items = [
            { name: 'SYS', icon: 'grin-hearts', sliderMin: this.state.sys.minimumValue, sliderMax: this.state.sys.maximumValue, sliderValue: this.state.sysValue },
            { name: 'DIA', icon: 'grin-hearts', sliderMin: this.state.dia.diaMinimumValue, sliderMax: this.state.dia.diaMaximumValue, sliderValue: this.state.diaValue }, 
            { name: 'BPM', icon: 'grin-hearts', sliderMin: this.state.bpm.bpmMinimumValue, sliderMax: this.state.bpm.bpmMaximumValue, sliderValue: this.state.bpmValue },  
          ];
        return (
            <Card style={styles.cardStyle} >
                <CardContent> 
            {/* <View style={styles.modalContent}>  */}
                    <Text style={styles.timeStyle}> 
                        Today is {moment(new Date()).format("MMM DD, YYYY")}
                    </Text>   
                    <ScrollView>
                        {items.map((item) => 
                            <View style={styles.sliderContain}>
                                <Text style={styles.sliderChangeValue}>{item.sliderValue}</Text>
                                <Slider
                                    style= {styles.sliderStyle}
                                    thumbTintColor= {'#0077B5'}
                                    minimumTrackTintColor= {'#0077B5'}
                                    maximumTrackTintColor= {'#d7e8ef'}
                                    value= {item.sliderValue}
                                    minimumValue= {item.sliderMin}
                                    maximumValue= {item.sliderMax}
                                    step= {1}
                                    onValueChange= {(changeValue) => this._updateHandler(changeValue, item.name)} 
                                />
                                <Text style={styles.sliderTitle}>{item.name} </Text>   
                            </View>
                        )}

                        <AutoGrowTextArea 
                            self= {this}
                        />
                    </ScrollView>
                </CardContent>
                <CardAction 
                    separator={true} 
                    inColumn={false}
                    style={styles.cardActionStyle}
                    >
                    <CardButton
                        onPress={() => this._buttonPressHandler()}
                        title="Save"
                        color="#FFFF"
                        style={{backgroundColor: '#0077B5', borderRadius: 5, fontSize: 16}}
                    />
                    <TouchableOpacity onPress={() => this._showHideChart()}>
                        {
                            this.state.isShowMore ?
                            <FontAwesome name={'chevron-up'} size={30} color={'#0077B5'} /> 
                            :
                            <FontAwesome name={'chevron-down'} size={30} color={'#0077B5'} /> 
                        }
                        
                    </TouchableOpacity>

                </CardAction>
                <View style={{width: '100%'}}>
                    {
                        this.state.isShowMore ?
                            <Charts 
                                uri= {'graphs'}
                            />
                        : null
                    }
                </View>
                    {/* <CardSection>
                        <Button 
                            style={{backgroundColor:'#0077B5'}} 
                            onPress={this._buttonPressHandler.bind(this)}>
                            <Text style={{color: '#fff'}}>Save</Text>
                        </Button>
                    </CardSection>

                    <Charts 
                        uri= {'graphs'}
                    /> */}
                {/* </ScrollView>
            </View> */}
            </Card>
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
        postBloodPressure: (bloodPressureData) => dispatch(addBloodPressure(bloodPressureData))
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (BloodPressurePage);

const styles = {
    cardStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: 'lightblue',
        width: 200,
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
        fontSize: 24
    },
    sliderContain: {
        textAlign: 'center',
        alignItems: 'center'
    },
    sliderStyle: {
        width: 270
    },
    sliderTitleText: {
        fontSize: 14
    },
    sliderChangeValue: {
        fontSize: 24, 
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#0077B5' 
    },
    titleStyle: {
        fontSize: 24, 
        color: '#0c9ef7' 
    },
    sliderTitle: {
        fontSize: 14,
        color: '#0077B5'
    },
    timeStyle: {
        color: '#0077B5', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    },
    cardActionStyle: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingLeft: 50, 
        paddingRight: 50
    }
};
