import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, Dimensions, AsyncStorage, ScrollView } from 'react-native';
import { ToggleSlider, Charts, headerBar, Button, CardSection  } from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addBath } from '../../../../redux/actions/dailyVitalsAction';
import { LineChart } from 'react-native-chart-kit';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';

class BathPage extends Component {
    static navigationOptions = () => (headerBar('Bath')); 

    state = {
        userId: '',
        noteText: '', 
        isBathTaken: false,
        isAssistanceNeeded: false,


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
            id: 'Bath',
            isBathTaken: this.state.isBathTaken,
            noteText: this.state.noteText,
            isAssistanceNeeded: this.state.isAssistanceNeeded,
            userId: this.state.userId
        };

        this.props.postBath(data);
        this.props.navigation.goBack();
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("MMM DD, YYYY")}
                </Text>
                <ScrollView>          
                    <ToggleSlider 
                        textLabel = 'Did you take a bath'
                        toggleSwitchHandler= {(value) => this.setState({
                            isBathTaken: value
                        })}
                        isActive = {this.state.isBathTaken}
                    />

                    <ToggleSlider 
                        textLabel = 'Needed Assistance'
                        toggleSwitchHandler= {(value) =>this.setState({
                            isAssistanceNeeded: value,
                        })}
                        isActive = {this.state.isAssistanceNeeded}
                    />

                    <AutoGrowTextArea 
                        self= {this}
                    />

                    <CardSection>
                        <Button 
                            style={{backgroundColor:'#0077B5'}} 
                            onPress={this._buttonPressHandler.bind(this)}>
                            <Text style={{color: '#fff'}}>Save</Text>
                        </Button>
                        <Button 
                            style={{backgroundColor:'#0077B5'}} 
                            onPress={this._buttonPressHandler.bind(this)}>
                            <Text style={{color: '#fff'}}>Save</Text>
                        </Button>
                    </CardSection>
                    <Charts 
                        uri= {'graphs'}
                    />
                    {/* <View>
                        <Text>
                            Bezier Line Chart
                        </Text>
                        <LineChart
                            data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemeber', 'October', 'November', 'Decemeber'],
                            datasets: [{
                                data: [ 20, 45, 28, 80, 99, 43, 1010, 321, 400, 2389, 2783, 3000 ]
                            }]
                            }}
                            width={Dimensions.get('window').width - 40} // from react-native
                            height={220}
                            chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fb8c00',
                            backgroundGradientTo: '#ffa726',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 16
                            }}
                        />
                    </View> */}
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
        postBath: (bathData) => dispatch(addBath(bathData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (BathPage);

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white'

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
    timeStyle: {
        color: '#0077B5', 
        fontSize: 16, 
        textAlign:'center', 
        padding:20
    }
    
}