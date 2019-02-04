import React from 'react';
import { Text, View, TextInput } from 'react-native';

const AutoGrowTextArea = ({ self }) => {
    return (
        <View> 
            <View style={styles.noteContainerStyle}>
                    <TextInput
                        style={styles.noteStyle}
                        multiline = {true}
                        editable = {true}
                        numberOfLines = {4}
                        placeholder= {'Note'}
                        placeholderTextColor= {"white"}
                        onChangeText={(text) => self.setState({noteText: text})}
                    />
                </View>
        </View>
    );
};

const styles = { 
    noteStyle: {
        minHeight:40,
        maxHeight: 100,
        marginLeft:16,
        marginRight:16,
        marginTop:10,
        marginBottom:10, 
        width: 270,
        borderBottomColor: '#000000',
        color: '#ffff',
        fontSize: 16
    },
    noteContainerStyle: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#7DBADF',
        borderRadius:5,
        borderBottomWidth: 1,
        minHeight:40,
        maxHeight: 100,
        flexDirection: 'row',
        alignItems:'center', 
        width:300,
        marginTop: 15
    },
};

export { AutoGrowTextArea };