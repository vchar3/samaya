import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { url } from '../../redux/apiUrlConfig';
 
import Pdf from 'react-native-pdf';
 
export default class PDFViwer extends React.Component {
    static navigationOptions = {
        title: 'Terms Of Service',
      };
    render() {
        let sourceUrl = url + '/termOfService';
        const source = {uri:sourceUrl, cache:true};
        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf'};
 
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,..."};
 
        return (
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}/>
            </View>
        )
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
    }
});