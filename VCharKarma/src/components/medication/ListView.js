import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

const ListView = ({ self }) => {

      return (
        <View style={styles.itemsStyle}> 
            <Text style={styles.headerStyle}> Today Medication </Text>

            <ScrollView>
                <View style={styles.cardStyle}>
                    <Card>
                        <CardTitle style={{fontSize:12}}
                            title="This is a title" 
                        />
                        <CardContent style={{height:'10%'}} text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction 
                            separator={true} 
                            inColumn={false}>
                            <CardButton
                            onPress={() => {}}
                            title="Taken"
                            color="blue"
                            />
                            <CardButton
                            onPress={() => {}}
                            title="Missed"
                            color="blue"
                            />
                        </CardAction>
                    </Card>
                    </View>
                    <View  style={styles.cardStyle}>
                    <Card >
                        <CardTitle style={{fontSize:12}}
                            title="This is a title" 
                        />
                        <CardContent style={{height:'10%'}} text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction 
                            separator={true} 
                            inColumn={false}>
                            <CardButton
                            onPress={() => {}}
                            title="Taken"
                            color="blue"
                            />
                            <CardButton
                            onPress={() => {}}
                            title="Missed"
                            color="blue"
                            />
                        </CardAction>
                    </Card>
                    </View>
                    <View  style={styles.cardStyle}>
                    <Card >
                        <CardTitle style={{fontSize:12}}
                            title="This is a title" 
                        />
                        <CardContent style={{height:'10%'}} text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction 
                            separator={true} 
                            inColumn={false}>
                            <CardButton
                            onPress={() => {}}
                            title="Taken"
                            color="blue"
                            />
                            <CardButton
                            onPress={() => {}}
                            title="Missed"
                            color="blue"
                            />
                        </CardAction>
                    </Card>
                    </View>
                    <View  style={styles.cardStyle}>
                    <Card >
                        <CardTitle style={{fontSize:12}}
                            title="This is a title" 
                        />
                        <CardContent style={{height:'10%'}} text="Your device will reboot in few seconds once successful, be patient meanwhile" />
                        <CardAction 
                            separator={true} 
                            inColumn={false}>
                            <CardButton
                            onPress={() => {}}
                            title="Taken"
                            color="blue"
                            />
                            <CardButton
                            onPress={() => {}}
                            title="Missed"
                            color="blue"
                            />
                        </CardAction>
                    </Card>
                </View>
        </ScrollView>
    </View>
      );
}

export {ListView};

const styles = {
    container: {     
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemsStyle: {
        width: 340,
        height: 450,
    },
    cardStyle: {
        width: 340,
        height: 170
    },
    headerStyle: {
        fontSize: 18,
        padding: 15
    }
};
