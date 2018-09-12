import React, {Component}  from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import {connect} from 'react-redux';
import { Button, Header, CardSection} from '../common/index';
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions';

class UserProfilePage extends Component { 
    static navigationOptions = {
        title: 'User Profile',
      };

    state = { 
        firstName: '',
        lastName: '',
        age: '',
        homePhone: '',
        mobilePhone: '',
        email: '',
    }

    _userDetailSavePress(event) {
        console.log('Creat Account Press');
        console.log('Pressed!');
        console.log(this.state)
        this.props.navigation.dispatch({type: 'Logout'});
    }
   
    render() {
        let { firstName, lastName, age, homePhone, mobilePhone, email } = this.state;
        return (
            <View > 
                {/* <Header  headerText="My Profile"> </Header>  */}
                <View style={styles.container}>
                <TextField
                    label='First Name'
                    value={firstName}
                    onChangeText={ (firstName) => this.setState({ firstName }) }
                />
                <TextField
                    label='Last Name'
                    value={lastName}
                    onChangeText={ (lastName) => this.setState({ lastName }) }
                />
                <TextField
                    label='Age'
                    value={age}
                    onChangeText={ (age) => this.setState({ age }) }
                />
                <TextField
                    label='Home Phone'
                    value={homePhone}
                    onChangeText={ (homePhone) => this.setState({ homePhone }) }
                />
                <TextField
                    label='Mobile Phone'
                    value={mobilePhone}
                    onChangeText={ (mobilePhone) => this.setState({ mobilePhone }) }
                />
                <TextField
                    label='Email'
                    value={email}
                    onChangeText={ (email) => this.setState({ email }) }
                />
               </View>
                <CardSection>
                <Button style={{backgroundColor:'#32CD32'}} 
                onPress={this._userDetailSavePress.bind(this)}>
                            Save
                </Button>
                </CardSection>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
      user: state.userReducer
    }
  }
  
function mapDispatchToProps(dispatch) {
return {
    getUser: (username, password) => dispatch(getUserLogin(username, password))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (UserProfilePage);

const styles = {
    container: {     
        backgroundColor: '',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30

      }
  };
