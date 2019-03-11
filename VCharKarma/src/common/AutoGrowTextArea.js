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
                        placeholderTextColor= {"#0077B5"}
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
        color: '#0077B5',
        fontSize: 16
    },
    noteContainerStyle: {
        borderColor: '#0077B5',
        borderWidth: 1,
        borderRadius:5,
        minHeight:40,
        maxHeight: 100,
        flexDirection: 'row',
        alignItems:'center', 
        margin: 15,
        
    },
};

export { AutoGrowTextArea };