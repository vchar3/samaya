import React, {Component}  from 'react';
import {Text, View, FlatList } from 'react-native';
import {List, ListItem} from 'react-native-elements';

const OtherAccountModel = ({ self }) => {
    return (
        <View>
            { self.state.data  ? 
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0}}>
                    <FlatList 
                        data={self.state.data}
                        renderItem={(item) => (
                            <ListItem 
                                title= {`${item.firstName} ${item.lastName}`}
                                subtitle={item.relationship}
                                containerStyle={{ borderBottomWidth: 0}}
                            />
                        )}
                        keyExtractor={item => item.email}
                    />
                </List>
             : <Text style={{width: 20, backgroundColor: 'red'}}>There is no authorized account </Text>
            } 

        </View>
    );
}

export {OtherAccountModel};