import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import {OtherAccountModel} from './OtherAccountModel';
import {getListOfAccount}   from '../../redux/actions/addUserAction';

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
                userName: value
            });
            this.props.getAccountList(value);
        })      
    }

    componentDidUpdate(prevProps) {
        
        if(this.props.userList  && this.props.userList !== prevProps.userList) {
            this.setState({
                data: this.props.userList
            });
        }
    }

    buttonPress() {
        console.log("press");
        this.setState({
            visibleModal: true
        })
    }

    accountChange(accountId){
        var name = accountId.fullName.split(' ')[0];
        this.setState({
            visibleModal: false,
            userName: name
        })
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.buttonPress()} style={{flexDirection:'row'}}>
                <Text style={styles.textStyle}>{this.state.userName}</Text>
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
    let users;
    if(state.addUserReducer.data.data) {
        users = state.addUserReducer.data.data.accountList;
    }
    return {
      userList: users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAccountList: (userId) => dispatch(getListOfAccount(userId))
    }
    
}
    
export default connect(mapStateToProps, mapDispatchToProps) (OtherAccountPage);

const styles = { 
    textStyle : {
        fontSize : 14,
        color: 'white',
        marginTop: 10,
        paddingRight: 10
    }

}