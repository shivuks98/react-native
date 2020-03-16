import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image,KeyboardAvoidingView,ScrollView}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lhome from './loginhome';
const url1="http://10.0.2.2:3000/user";
export default class register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            phone:"",
            email:"",
            password:"",
            wallet:0
        }
        
        
    }
    render(){
        return (
            <ScrollView style={styles.container}>
            <KeyboardAvoidingView  behavior='padding' style={styles.viewc}>
            
                <View>
                    <Text style={styles.header}>Registeration Form</Text>
                    <TextInput style={styles.input} placeholder="Name" onChangeText={(name)=>this.setState({name})}
                    />
                    <TextInput style={styles.input} placeholder="Phone" onChangeText={(phone)=>this.setState({phone})}/>
                    <TextInput style={styles.input} placeholder="Email" onChangeText={(email)=>this.setState({email})}/>
                    <TextInput style={styles.input} placeholder="Password" onChangeText={(password)=>this.setState({password})}
                    secureTextEntry
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={this.register} style={styles.button}>
                        <Text style={styles.btext}>Register</Text>
                    </TouchableOpacity>
                </View>
                
            </KeyboardAvoidingView>
            </ScrollView>
        )
    }
    register=()=>{
        let user={}
        user.id=this.state.email
        user.name=this.state.name,
        user.phone=this.state.phone,
        user.email=this.state.email,
        user.password=this.state.password,
        user.wallet=this.state.wallet

        fetch(url1,{
            method:'post',
            headers:{
                'Accept': 'appplication/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        }).then((response)=>{
            response.json();
            console.log(response.status)
        }).catch(e=>{
            console.log("Error "+e)
        })
        .then(response=>console.log("success:",response))
        
        alert("registered successfully")
        this.props.navigation.navigate('home')
    }
    
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        backgroundColor:'#7986cb',
        paddingLeft:60,
        paddingRight:60

    },
    viewc:{
        justifyContent:'center',
    },
    header:{
        fontSize:24,
        color:'#fff',
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#d500f9',
        alignItems:'center',
        borderBottomWidth:1
    },
    input:{
        // textAlign:'center',
        height:40,

        marginBottom:30,
        color:"#ffff",
        borderBottomWidth:1,
        borderBottomColor:"#f8f8f8"
    },
    button:{
        alignItems:'center',
        padding:20,
        backgroundColor:'#2962ff'
    },
    btext:{
        color:"#ffff",
        fontSize:18,
        fontWeight:'bold'
    }

});