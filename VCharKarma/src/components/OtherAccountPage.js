import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions/actions';
import {OtherAccountModel} from './OtherAccountModel';

class OtherAccountPage extends Component { 

    state = { 
        userName: '',
        visibleModal: false,
        data:[],
        
    }

    constructor() {
        super();

        AsyncStorage.getItem('userName').then((value) => {
            this.setState({
                userName: 'John'
            });
        })
    }

    buttonPress() {
        console.log("press");
        this.setState({
            visibleModal: true
        })
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.buttonPress()} style={{flexDirection:'row'}}>
                <Text>{this.state.userName}</Text>
                <Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />
                </TouchableOpacity>

                <Modal
                    isVisible={this.state.visibleModal}
                    backdropColor={'#2FAEE0'}
                    backdropOpacity={1}
                    animationIn={'zoomInDown'}
                    animationOut={'zoomOutUp'}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}>
                    
                    {
                        <View>
                          <OtherAccountModel 
                            self={this}
                          />  
                        </View>
                    
                    }
                </Modal>
            </View>
        );
    }


}


function mapStateToProps(state) {
    return {
      user: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (username, password) => dispatch(getUserLogin(username, password))
    }
    
}
    
export default connect(mapStateToProps, mapDispatchToProps) (OtherAccountPage);