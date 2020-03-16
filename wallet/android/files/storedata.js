import 'react-native-gesture-handler'
import * as React from 'react';
// import React from 'react'
import {NavigationContainer}from '@react-navigation/native';
import {TouchableOpacity,StyleSheet,Text, View,TextInput} from 'react-native'
// const user=[name='',phone='']
const url1="http://10.0.2.2:3000/user";
export default class storedata extends React.Component{
    
    constructor(props){
        super (props)
        this.state={
                name:'',
                phone:'',
        }
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('loginhome',{name:"hello"})}>
                <Text>click</Text>
            </TouchableOpacity>
            
        )
    }
    
}