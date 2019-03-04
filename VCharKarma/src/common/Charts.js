import React from 'react';
import { View, Text, WebView } from 'react-native';
import {url} from '../../redux/apiUrlConfig'

const Charts = ({uri}) => { 
    let sourceUrl = url + uri;
    return (
        <View style={styles.container}>
            <WebView
                scrollEnabled= {false}
                scalesPageToFit= {true}
                javaScriptEnabled= {true}
                source={{uri: sourceUrl}}
                automaticallyAdjustContentInsets={false} 
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}                      
            />
        </View>
    );
};

const styles = {
    container: {
        width: '100%', 
        height:250
    }
  };

  export { Charts };