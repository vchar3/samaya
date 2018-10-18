import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children, style}) => {
    const { buttonStyle, textStyle } = defaultStyle;
    const combineStyles = StyleSheet.flatten([buttonStyle, textStyle, style]); 
    return (
        <TouchableOpacity onPress={onPress} style={combineStyles}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const defaultStyle = StyleSheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#16A7F0',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
});

export { Button };
