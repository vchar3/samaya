import React, {Component} from 'react';
import {Text, View, TextInput, AsyncStorage, ScrollView, TouchableOpacity} from 'react-native';
import { ToggleSlider, Charts, Button, CardSection, headerBar } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addNutrition } from '../../../../redux/actions/dailyVitalsAction';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class NutritionPage extends Component {
    static navigationOptions = () => (headerBar('Nutrition')); 

    state = {
        userId: '',
        noteText: '', 
        isBreakfastTaken: false,
        isLunchTaken: false,
        isDinnerTaken: false,
        isAssistanceNeeded: false,
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
            id: 'Nutrition',
            noteText: this.state.noteText, 
            isBreakfastTaken: this.state.isBreakfastTaken,
            isLunchTaken: this.state.isLunchTaken,
            isDinnerTaken: this.state.isDinnerTaken,
            isAssistanceNeeded: this.state.isAssistanceNeeded,
            userId: this.state.userId
        };
        this.props.postNutrition(data);
        this.props.navigation.goBack();
    }

    _showHideChart() {
        this.setState({
            isShowMore : !this.state.isShowMore
        })
    }
    
    render() {
        return (
            <Card style={styles.cardStyle} >
                <CardContent> 
            {/* <View style={styles.container}> */}
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("MMM DD, YYYY")}
                </Text>
                <ScrollView> 
                    <ToggleSlider 
                        textLabel = 'Breakfast'
                        toggleSwitchHandler= {(value) => this.setState({
                            isBreakfastTaken :value,
                        })}
                        isActive = {this.state.isBreakfastTaken}
                    />

                    <ToggleSlider 
                        textLabel = 'Lunch'
                        toggleSwitchHandler= {(value) => this.setState({
                            isLunchTaken :value,
                        })}
                        isActive = {this.state.isLunchTaken}
                    />

                    <ToggleSlider 
                        textLabel = 'Dinner'
                        toggleSwitchHandler= {(value) => this.setState({
                            isDinnerTaken :value,
                            dateTime: moment(new Date()).format("LT")  
                        })}
                        isActive = {this.state.isDinnerTaken}
                    />

                    <Text style={{fontSize:24, marginTop: 10, color: '#0077B5', textAlign: 'center'}}>
                        What did you eat?
                    </Text>
                    <View style={{alignItems:'center'}}>
                    <TextInput 
                        value={this.state.foodToday}
                        style={styles.inputStyle}
                        onChangeText={ (food) => this.setState({ foodToday: food, dateTime: moment(new Date()).format("LT")  })}
                    />
                    </View>

                    <ToggleSlider 
                        textLabel = 'Needed Assistance'
                        toggleSwitchHandler= {(value) =>this.setState({
                            isAssistanceNeeded :value,
                            dateTime: moment(new Date()).format("LT")  
                        })}
                        isActive = {this.state.isAssistanceNeeded}
                    />

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
        postNutrition: (nutritionData) => dispatch(addNutrition(nutritionData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NutritionPage);

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        // paddingLeft: 20,
        // paddingRight: 20,
        // justifyContent: 'flex-start',
        // alignItems: 'center',

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
    inputStyle: { 
        padding: 5,
        fontSize:24, 
        borderWidth: 1,
        borderColor: '#0077B5',
        marginBottom: 10,
        marginTop: 10,
        width: 270
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
}