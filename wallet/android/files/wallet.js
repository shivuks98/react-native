import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image,ActivityIndicator}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lhome from './loginhome';
import axios from 'axios';
const url="http://10.0.2.2:3000/user";
export default class wallet extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.route.params.name,
            wallet
        }
    }
    componentDidMount(){
        axios.get(url+'/'+this.state.id)
        .then((response)=>{
            this.setState({
                wallet:response.data.wallet
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
            <View>
                <Text style={styles.name}>Balance </Text>
                <Text style={styles.text}>{this.state.wallet}</Text>
           </View>
           <View >
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('addMoney',{name:this.state.id})} style={styles.addbtn}>
                <Text style={styles.text}>Add Money</Text>
                </TouchableOpacity>
           </View>
       </View>   
       
       )
   }
   addMoney=()=>{
       return(
           <View>hii</View>
       )
   }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#64b5f6',
    flex:1,
    alignItems:'center'
    // paddingLeft:20
},
    name:{
        marginTop:1,
        padding:20,
        fontSize:25,
        fontWeight:'bold'
        // borderBottomColor:"#ffff",
        // borderBottomWidth:1
    },
    text:{
        fontSize:17,
        fontWeight:'bold',
        alignItems:'center'
    },
    addbtn:{
        margin:30,
        
        backgroundColor:"#1e88e5",
        padding:10,
        borderWidth:1
        
    }
})