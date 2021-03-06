import React, {Component}  from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, TextInput, AsyncStorage, ScrollView } from 'react-native';
import { CheckBox, Slider } from 'react-native-elements';
import { Charts, headerBar, Button, CardSection } from '../../../common/index';
import moment from 'moment';
import feelingChanges from './FeelingChanges';
import {connect} from 'react-redux';
import { addFeeling } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';
import {randomColor} from 'randomcolor';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class FeelingPage extends Component { 
    static navigationOptions = () => (headerBar('Feeling'));

    state = {
        userId: '',
        sliderValue: 0,
        noteText: '',
        isGood: false,
        isFatigued: false,
        isTired: false,
        isSick: false,
        goodValue: 0,
        fatiguedValue: 0,
        tiredValue: 0,
        sickValue: 0,
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
        let data  = {
            id: 'Mood',
            sliderValue: this.state.sliderValue,
            noteText: this.state.noteText,
            goodValue: this.state.goodValue,
            fatiguedValue: this.state.fatiguedValue,
            tiredValue: this.state.tiredValue,
            sickValue: this.state.sickValue,
            userId: this.state.userId
        };
        this.props.postFeeling(data);
        this.props.navigation.goBack();
    }

    _buttonPressHandler(sliderValue, event) {
        if(event === 'Good') {
            this.setState({
                isGood: true,
                isFatigued: false,
                isTired: false,
                isSick: false,
                goodValue: sliderValue
            });

        } else if(event === 'Fatigued') {
            this.setState({
                isGood: false,
                isFatigued: true,
                isTired: false,
                isSick: false,
                fatiguedValue: sliderValue 
            });

        } else if(event === 'Tired') {
            this.setState({
                isGood: false,
                isFatigued: false,
                isTired: true,
                isSick: false,
                tiredValue: sliderValue
            });

        } else if(event === 'Sick') {
            this.setState({
                isGood: false,
                isFatigued: false,
                isTired: false,
                isSick: true,
                sickValue: sliderValue
            });

        }
    }

    _showHideChart() {
        this.setState({
            isShowMore : !this.state.isShowMore
        })
    }
    
    render() {
        let items = [
            { name: 'Good', icon: 'grin-hearts', sliderValue: this.state.goodValue, showSlider: this.state.isGood }, 
            { name: 'Fatigued', icon: 'flushed', sliderValue: this.state.fatiguedValue, showSlider: this.state.isFatigued  },
            { name: 'Tired', icon: 'grin-beam-sweat', sliderValue: this.state.tiredValue, showSlider: this.state.isTired },
            { name: 'Sick', icon: 'sad-cry', sliderValue: this.state.sickValue, showSlider: this.state.isSick  }
          ];
        return (
            <Card style={styles.cardStyle} >
                <CardContent> 
            {/* <View style={styles.modalContent}>  */}
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("MMM DD, YYYY")}
                </Text>
                <ScrollView>
                    <View>
                    {   items.map((item) => 
                            (   
                                <TouchableHighlight 
                                    onPress={() => this._buttonPressHandler(item.sliderValue, item.name)} >
                                    <View style={[styles.containerBox, {backgroundColor: '#0077B5'}]}> 
                                        <FontAwesome5 name={item.icon} size={50} color={'white'} style={{width: 50}}/> 
                                        <View style={{width: 200, marginLeft: 10}}>
                                            <Text style={styles.title}>{item.name}</Text>
                                            {item.showSlider ? 
                                            <Slider
                                                style={styles.sliderStyle}
                                                value={item.sliderValue}
                                                minimumValue={0}
                                                maximumValue={10}
                                                step={1}
                                                minimumTrackTintColor={'green'}
                                                maximumTrackTintColor={'red'}
                                                thumbTintColor={'#ffff'}
                                                thumbTouchSize={{width: 240, height: 100}}
                                                onValueChange={(value) => this._buttonPressHandler(value, item.name)} 
                                            />
                                            : 
                                            null
                                            } 
                                        </View>
                                    </View>
                                </TouchableHighlight> 
                            )
                        )
                    }  
                    </View>
                
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
                    />
                </ScrollView>
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
        postFeeling: (feelingData) => dispatch(addFeeling(feelingData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FeelingPage);

const styles = {
    modalContent: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
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
    timeStyle: {
        color: '#0077B5', 
        fontSize: 16, 
        textAlign:'center', 
        fontWeight: 'bold',
        padding:10
    },
    sliderContainerStyle: {
        width: 340,
        height: 100,
        paddingTop: 15
    },
    sliderTextStyle: {
        color: '#0077B5', 
        fontSize: 16, 
        textAlign:'center', 
        fontWeight: 'bold',
    },
    sliderStyle: {
        marginLeft:10,
        marginRight: 10
    },
    containerBox: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 15,
        borderWidth: 1,
        borderColor: '#ffff'
    },
    title: {
        padding : 10,
        color   :'#ffff',
        fontWeight:'bold',
        fontSize:22
    },
    cardActionStyle: {
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingLeft: 50, 
        paddingRight: 50
    }
};