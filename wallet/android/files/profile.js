import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lhome from './loginhome';
export default class profile extends React.Component{


   /* componentDidMount(){
       try{
           fetch('https://webhook.site/fcc2afac-26b9-40cb-94cf-bba26dfef658',{
               method:'post',
               mode:'no-cors',
               headers:{
                   'Accept':'application/json',
                   'Content-Type':'application/json'
               },
               body:JSON.stringify({

                   username:'john',
                   password:'abc',
                   name:'shivu'
               })
           })

       }catch(e){
           console.log(e)
       }
   }*/
    render(){
    //     return fetch('https://webhook.site/fcc2afac-26b9-40cb-94cf-bba26dfef658')
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   console.log(responseJson);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

        
        return(
            
            <View>
                <Text>hii</Text>
                
            </View>
        )
    }
}