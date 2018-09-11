import React, {Component}  from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {connect} from 'react-redux';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { fetchDataFromAPI, getUserLogin } from '../../redux/actions';
import GridView from 'react-native-super-grid';

class HomePage extends Component { 
    static navigationOptions = {
        title: 'Home',
      };

    state = { 
        cardList: [
            {'image': '../../img/flower.jpeg', 'title': 'Home', 'id': 1},
            {'image': '../../img/flower2.jpeg', 'title': 'Home', 'id': 2},
            {'image': '../../img/flower.jpeg', 'title': 'Home', 'id': 3},
            // {'image': '../../img/flower2.jpeg', 'title': 'Home', 'id': 4},
            // {'image': '../../img/flower.jpeg', 'title': 'Home', 'id': 5}
         ]
    }

    _buttonPressHandler(event) {
        console.log('Home Pressed!');
        this.props.navigation.dispatch({type: 'Login'});
    }
   
    render() {
        let { } = this.state;
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
          ];

        return (

            <GridView
                itemDimension={130}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                <TouchableOpacity  onPress={this._buttonPressHandler.bind(this)}>
                <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text>
                </View>
                </TouchableOpacity>
                )}
            />

            // <View style= {styles.container}> 
            //     { this.state.cardList.map((item, index) => (
            //     <TouchableOpacity  onPress={this._buttonPressHandler.bind(this)} style= {styles.press}>
            //         <Card style= {styles.card}>
            //             <CardImage 
            //                 source={require('../../img/flower.jpeg')} 
            //                 title={item.title}
            //                 style={{width: 150}}
            //                 resizeMode= "stretch"
            //                 resizeMethod="resize"
            //             />
            //         </Card>
            //     </TouchableOpacity>))
            //     }
            // </View>
        );
    }
}

function mapStateToProps(state) {
    return {
      user: state.userReducer
    }
  }
  
function mapDispatchToProps(dispatch) {
return {
    getUser: (username, password) => dispatch(getUserLogin(username, password))
}

}

export default connect(mapStateToProps, mapDispatchToProps) (HomePage);

const styles = {
    gridView: {
        paddingTop: 25,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
    container: {     
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

      },
      card : {
        flex: 1,
      },
      cardImage: {

      },
      press : {
        flex: 1, 
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10, 
        width: 150, 
        height: 110
      },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1

    },
    inputStyle: {
        height:40, 
        flex: 1,  
        fontSize: 18, 
        borderWidth: 1, 
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    }
  };
