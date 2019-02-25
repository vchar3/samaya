import React, {Component}  from 'react';
import {StyleSheet,Text,View,Image,TouchableHighlight,Animated} from 'react-native';

class DropListCard extends Component{
    constructor(props){
        super(props);

        // this.icons = {     //Step 2
        //     'up'    : require('../../img/Arrowhead-01-128.png'),
        //     'down'  : require('../../img/Arrowhead-Down-01-128.png')
        // };
        this.state = {       //Step 3
            title       : props.title,
            expanded    : false,
            subTitle    : props.subTitle,
            animation   : new Animated.Value(),
            time        : props.time,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        nextState.subTitle = nextProps.subTitle;
        nextState.time = nextProps.time;
    }

    toggle(){

        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();
    }

    _setMaxHeight(event){
        this.setState({
            maxHeight   : event.nativeEvent.layout.height
        });
    }

    _setMinHeight(event){
        this.setState({
            minHeight   : event.nativeEvent.layout.height
        });
    }


    render(){
        // let icon = this.icons['down'];

        // if(this.state.expanded){
        //     icon = this.icons['up'];   //Step 4
        // }

        //Step 5
        return ( 
            <Animated.View 
            style={[styles.container,{height: this.state.animation}]}>
            <TouchableHighlight 
                onPress={this.toggle.bind(this)}
                underlayColor="#f1f1f1">
                <View>
                    <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}>    
                        <Text style={styles.title}>{this.state.title}</Text>
                        <View>
                            <Text style={styles.title}>{this.state.subTitle}</Text> 
                            <Text>{this.state.time}</Text> 
                        </View>
                    </View>      
                </View>
                
            </TouchableHighlight>
            { this.state.expanded ?
            <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
                {this.props.children}
            </View> : null
            }
        </Animated.View>
        );
    }
};
export default DropListCard;

var styles = {
    container   : {
        backgroundColor: '#78B6DD',
        margin:5,
        overflow:'hidden'
    },
    titleContainer : {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title       : {

        padding : 10,
        color   :'#ffff',
        fontWeight:'bold',
        fontSize:20
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        padding     : 10,
        paddingTop  : 0
    }
};