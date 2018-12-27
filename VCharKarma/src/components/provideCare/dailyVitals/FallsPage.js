import React from 'react';
import {Image, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { ToggleSlider } from '../../../common/index';
import moment from 'moment';

const FallsPage = ({self, onPress}) => {
    return (
        <View style={styles.container}>
            <ToggleSlider 
                textLabel = 'Did you take a bath'
                toggleSwitchHandler= {(value) => self.setState({
                    falls: {
                        ...self.state.falls,
                        isFalls :value,
                        dateTime: moment(new Date()).format("LT") 
                    } 
                })}
                isActive = {self.state.falls.isFalls}
            />
            { self.state.falls.isFalls  
            ? <View>
                <Text>
                    Number of fell today
                </Text>
                <TextInput 
                    value={self.state.falls.number}
                    style={styles.inputStyle}
                    onChangeText={ (value) => self.setState({ 
                        falls: {
                            ...self.state.falls,
                            number :value,
                            dateTime: moment(new Date()).format("LT") 
                        }  
                    })}
                />
            </View>
            : null
            }
        </View>
    );
}; 

const styles = {
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
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
        marginTop: 10
    },
}


export { FallsPage };