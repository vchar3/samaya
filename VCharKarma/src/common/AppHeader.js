import React from 'react';
import { Image } from 'react-native';

const AppHeader = (title) => {
    return {
        title: title,
        headerStyle: {
            backgroundColor: '#78B6DD',
            borderBottomColor: '#fff'
        },
        headerTintColor: "#ffff",
        headerRight: (<Image style={{marginRight: 15}} source={require('../../img/UserIcon.png')} />)
        }
}

export default AppHeader ;