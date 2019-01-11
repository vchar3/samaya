import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const ListView = ({ self }) => {

      return (
        <View style={styles.container}> 
            <Text style={styles.headerStyle}> Today Medication </Text>

            <ScrollView>
                {
                    self.state.listOfSchedule.map((item) => {
                        return (
                            <Card style={styles.cardStyle}>
                                <CardTitle style={{fontSize:12}}
                                    title={item.name}
                                    isDark={true}
                                />
                                <CardContent> 
                                    <Text style={styles.cardContentTextStyle}> {'Take ' + item.name + ' at ' + item.time} </Text>
                                </CardContent>
                                <CardAction 
                                    separator={true} 
                                    inColumn={false}>
                                    <CardButton
                                    onPress={() => {}}
                                    title="Taken"
                                    color="green"
                                    />
                                    <CardButton
                                    onPress={() => {}}
                                    title="Missed"
                                    color="red"
                                    />
                                </CardAction>
                            </Card>
                        )
                    }) 
                }
        </ScrollView>
    </View>
      );
}

export {ListView};

const styles = {
    container: {     
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 450
    },
    cardStyle: {
        width: 340,
        height: 200,
        backgroundColor: 'lightblue'
    },
    headerStyle: {
        fontSize: 16,
        padding: 10,
        color:'lightblue'
    },
    cardContentTextStyle: {
        color: 'white', 
        fontSize: 18
    }
};
