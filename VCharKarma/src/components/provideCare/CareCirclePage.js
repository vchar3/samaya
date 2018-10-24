import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, AsyncStorage, Image } from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';

import {CareCircleModel} from './CareCircleModel';
import {addUser} from '../../../redux/actions/addUserAction';

class CareCirclePage extends Component { 
    static navigationOptions = {
        title: 'Care Circle',
        headerStyle: {
            backgroundColor: '#7DBADF',
            borderBottomColor: '#fff'
        },
        headerTintColor: "#ffff",
        headerRight: (<Image style={{marginRight: 15}} source={require('../../../img/UserIcon.png')} />)
    };

    state = {
        visibleModal: false,
        name:'',
        relation:'',
        status:'',
        email:'',
        listOfUsers:[]
    }

    _renderModalContent = () => (
        <View >
            <CareCircleModel 
                self = {this}
                onPress= { () => this._closeModelPress()}
            />
        </View>
    )

    _closeModelPress() {
        if(this.state.name && this.state.relation && this.state.status && this.state.email) {
            let user = {
                name: this.state.name,
                relation: this.state.relation,
                status: this.state.status,
                email: this.state.email,
            }

            this.props.addUserDetail(user);
            this.setState({
                listOfUsers: [
                    ...this.state.listOfUsers,
                    user
                ]
            })

        }
        
        this.setState({ visibleModal: false})
    }

    _buttonPressHandler() {
        this.setState({ 
            visibleModal: true,
            name:'',
            relation:'',
            status:'',
            email: ''            
        });
    }

      render() {
        return (
            <View style={{flex:1, alignItems: 'center',paddingLeft:30, paddingRight:30}}>

                <TouchableOpacity style={{backgroundColor:'green', width: 200, borderRadius:20, marginTop: 20}} onPress={() => this._buttonPressHandler()}>
                    <Text style={{fontSize: 24, textAlign: 'center'}}>Add People</Text>
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
                    
                    {this._renderModalContent()}
                </Modal>
                {
                    this.state.listOfUsers.map((items) =>  (
                    <View key={items} style={{width: 200, backgroundColor:'#fff', padding:10, margin: 20}} >
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingBottom:10}}>
                            <Text>{items.name}</Text>
                            <Text>{items.relation}</Text>
                        </View>
                        <Text>{items.status}</Text>
                    </View>
                    ))
                }

            </View>
        );
      }



}

function mapStateToProps(state) {
    return {
     //addUserDetail : (userDetail) => dispatch(addUser(userDetail))
    }
  }
  
function mapDispatchToProps(dispatch) {
return {
    addUserDetail : (userDetail) => dispatch(addUser(userDetail))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (CareCirclePage);