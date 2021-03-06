import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image,ActivityIndicator}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lhome from './loginhome';
import axios from 'axios';
const url="http://10.0.2.2:3000/user";
export default class profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.route.params.name,
            name:null,
            email:null,
            phone:null,
            password:null
        }
    }
    componentDidMount(){
        axios.get(url+'/'+this.state.id)
        .then((response)=>{
            this.setState({
                name:response.data.name,
                email:response.data.email,
                phone:response.data.phone,
                password:response.data.password
            })
            .catch((e)=>{
                console.log(e)
            })
        })
    }


  
   render(){
    // console.warn(this.state)
       return(
      <View style={styles.container}> 
            <View style={styles.name}>
                <Text  style={styles.text}>Name : {this.state.name}</Text>
            </View>
            <View  style={styles.name}>
                <Text style={styles.text}>E-mail : {this.state.email}</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.text}>Phone Number : {this.state.phone}</Text>  
            </View>
            <View style={styles.name}>
                <Text style={styles.text}>Password : {this.state.password}</Text>
            </View>
       </View>   
       )
   }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#64b5f6',
    flex:1,
    // alignItems:'center'
    // paddingLeft:20
},
    name:{
        marginTop:1,
        padding:20,
        borderBottomColor:"#ffff",
        borderBottomWidth:1
    },
    text:{
        fontSize:17,
        fontWeight:'bold'
    }
})