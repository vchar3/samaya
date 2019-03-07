import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Button, CardSection, headerBarWithOutAccount} from '../../common/index';
import {randomColor} from 'randomcolor';
import {connect} from 'react-redux';
import { CheckBox } from 'react-native-elements'
import { createNewUser } from '../../../redux/actions/addUserAction';

class HealthProfilePage extends Component {
    static navigationOptions = () => (headerBarWithOutAccount('New Account')); 

    state = { 
        bloodType:'',
        allergies:'',
        height:'',
        weight:'',
        buttonColor: '#8c8a8a',
        checked: false
    }

    _buttonPressHandler(event) {
        if(this.state.checked) {
            let color = randomColor();
            let healthDetail= {
                bloodType:this.state.bloodType,
                allergies:this.state.allergies,
                height:this.state.height,
                weight:this.state.weight,
                backgroundColor: color         
            };

            let accountInfo = {...this.props.navigation.getParam('accountDetail'), ...healthDetail };
            this.props.newUserDetail(accountInfo);
        } else {
            this.setState({
                error: 'Term and Condition is not selected.'
            })
        }
    }

    componentDidUpdate() {
        if(this.props.response) {
            this.props.navigation.navigate('Success', {
                message: this.props.response
            })
        }
    }

    pdfClicked() {
        console.log('term and condition');
        this.props.navigation.navigate('PDFViwer');
    }

    handleCheckBox() {
        this.setState({
            checked: !this.state.checked,
            error: ''
        })

        let color ;
        if(this.state.checked) { 
            color = '#8c8a8a';
        } else {
            color = '#0077B5'
        }

        this.setState({
            buttonColor: color
        }) 
    }
   
    render() {
        const { navigation } = this.props;
        let { bloodType, allergies, height, weight } = this.state;

        return (
            <View style={styles.container}>
                {/* <Text> {this.props.navigation.getParam('userName')}</Text> */}
                { this.state.error ?
                <Text style={{marginTop: 20, color: 'red'}}> {this.state.error}</Text> 
                :
                null
                }
                <View style={{backgroundColor:'white', width: 300,}}>
                <TextField
                    label='Blood Type'
                    value={bloodType}
                    textColor={'#0077B5'}
                    baseColor={'#0077B5'}
                    tintColor={'#0077B5'}
                    onChangeText={ (bloodType) => this.setState({ 
                        bloodType:bloodType,
                      }) }
                />

                <TextField
                    label='Allergies'
                    value={allergies}
                    textColor={'#0077B5'}
                    baseColor={'#0077B5'}
                    tintColor={'#0077B5'}
                    onChangeText={ (allergies) => this.setState({ 
                        allergies:allergies,
                      }) }
                />

                <TextField
                    label='Height'
                    value={height}
                    textColor={'#0077B5'}
                    baseColor={'#0077B5'}
                    tintColor={'#0077B5'}
                    onChangeText={ (height) => this.setState({ 
                        height:height,
                      }) }
                />
                
                <TextField
                    label='Weight'
                    value={weight}
                    textColor={'#0077B5'}
                    baseColor={'#0077B5'}
                    tintColor={'#0077B5'}
                    onChangeText={ (weight) => this.setState({ 
                        weight:weight,
                      }) }
                />

                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: 300}}>
                    <CheckBox            
                    containerStyle={{backgroundColor: '#ffff', borderRadius: 0, borderWidth: 0, padding: 0}}
                    checked={this.state.checked}
                    size= {30}
                    onPress={() => this.handleCheckBox()}
                    />
                    <View >
                       <Text style={{fontSize: 20}}>I have read and agree to the </Text> 
                       <TouchableOpacity onPress={() => this.pdfClicked()}>
                       <Text style={{fontSize: 20, color: 'blue'}}>"Term and Condition" </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                <CardSection>
                    <Button 
                        style={{backgroundColor:this.state.buttonColor}} 
                        onPress={this._buttonPressHandler.bind(this)}>
                            <Text style={{color: '#fff'}}>Contiune</Text>
                    </Button>
                </CardSection>
            </View>
        );
    }
}

function mapStateToProps(state) {
    let responseMessage ;
    if(state.addUserReducer.data.data) {
        responseMessage = state.addUserReducer.data.data.successMessage
    }

    if(state.addUserReducer.error.response) {
        responseMessage = state.addUserReducer.error.response.data.errorMessage
    }

    return {
      response: responseMessage,
    }
  }
  
function mapDispatchToProps(dispatch) {
    return {
        newUserDetail: (accountDetail) => dispatch(createNewUser(accountDetail))       
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HealthProfilePage);

const styles = {
    
    container: {     
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'

      }
  };
