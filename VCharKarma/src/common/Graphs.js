import React from 'react';
import { View, Text, WebView } from 'react-native';

const Graphs = ({uri}) => { 
    return (
        <View style={styles.container}>
            <WebView
                scrollEnabled= {false}
                scalesPageToFit= {true}
                javaScriptEnabled= {true}
                source={{uri: uri}}                       
            />
        </View>
    );
};

const styles = {
    container: {
        width: '100%', height:200
    }
  };

  export { Graphs };