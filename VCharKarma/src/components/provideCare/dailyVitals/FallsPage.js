import React, {Component} from 'react';
import {Image, Text, View, TouchableOpacity, TextInput, ScrollView, AsyncStorage } from 'react-native';
import { ToggleSlider, Charts, Button, CardSection , headerBar} from '../../../common/index';
import moment from 'moment';
import {connect} from 'react-redux';
import { addFall } from '../../../../redux/actions/dailyVitalsAction';
import { BarChart, Grid, LineChart, XAxis } from 'react-native-svg-charts';
import {AutoGrowTextArea} from '../../../common/AutoGrowTextArea';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class FallsPage extends Component { 
    static navigationOptions = () => (headerBar('Walks & Falls'));

    state = {
        userId: '',
        noteText: '', 
        isFalls: false,
        number: 0,
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
            id: 'Fall',
            noteText: this.state.noteText, 
            isFalls: this.state.isFalls,
            number: this.state.number,
            userId: this.state.userId
        };
        this.props.postFall(data);
        this.props.navigation.goBack();
    }

    _showHideChart() {
        this.setState({
            isShowMore : !this.state.isShowMore
        })
    }
    
    render() {
        const fill = 'rgb(134, 65, 244)'
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
        return (
            <Card style={styles.cardStyle} >
                <CardContent> 
            {/* <View style={styles.container}> */}
                <Text style={styles.timeStyle}> 
                    Today is {moment(new Date()).format("MMM DD, YYYY")}
                </Text> 
                <ScrollView>
                    <ToggleSlider 
                        textLabel = 'Did you take walk today?'
                        toggleSwitchHandler= {(value) => this.setState({
                            isFalls: value
                        })}
                        isActive = {this.state.isFalls}
                    />
                    { this.state.isFalls  
                    ? <View>
                        <Text  style={styles.timeStyle}>
                            Number of fall today
                        </Text>
                        <TextInput 
                            value={this.state.number}
                            style={styles.inputStyle}
                            keyboardType={ 'numeric'}
                            onChangeText={ (value) => this.setState({ 
                                number :value,
                            })}
                        />
                    </View>
                    : null
                    }

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

                    {/* <BarChart
                        style={{ height: 200, width: 300  }}
                        data={ data }
                        svg={{ fill }}
                        contentInset={{ top: 30, bottom: 30 }}
                    >
                        <Grid/>
                    </BarChart>

                    <ScrollView horizontal={true} contentContainerStyle={{width: 300}}>
                        <View style={{ height: 200, padding: 20, width: 300 }}>
                        <LineChart
                            style={{ flex: 1 }}
                            data={data}
                            gridMin={0}
                            contentInset={{ top: 10, bottom: 10 }}
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid />
                        </LineChart>
                        <XAxis
                            style={{ marginHorizontal: -10 }}
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'black' }}
                        />
                        </View>
                    </ScrollView> */}
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
        postFall: (fallData) => dispatch(addFall(fallData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FallsPage);

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
    inputStyle: { 
        padding: 5,
        fontSize:24, 
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        color: '#0077B5', 
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
