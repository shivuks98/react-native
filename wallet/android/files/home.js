import 'react-native-gesture-handler'
import React from 'react';
import axios from 'axios'
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image,KeyboardAvoidingView,ScrollView}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lhome from './loginhome';
const stack=createStackNavigator();
// const userInfo={ username:"shivu@123",password:"12345"}
const url1="http://10.0.2.2:3000/user";

export default class home extends React.Component{
    constructor(props){
        super(props);
        this.state={data:[],
            username:'',password:'',uname:null,upass:null
        }
    }
    render(){
        return (

        

            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='padding' style={styles.kview}>
                <View style={styles.image}>
                    <Image  source={require('../files/images/wallet_logo1.png')}/>
                </View>
                <View>
                    <TextInput placeholder="Username/Email" style={styles.input}
                    onChangeText={(username)=>this.setState({username})}
                    // onSubmitEditing={()=>this.passwordInput.focus}
                    />
                    <TextInput placeholder="password" style={styles.input}
                    onChangeText={(password)=>this.setState({password})}
                    // ref={(input)=>this.passwordInput=input}
                    />
                </View>
                <View style={styles.loginbtn}>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={{fontSize:22}}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupbtn}>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={{fontSize:18}}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
    
    
    login=()=>{
        console.log(url1+'/'+this.state.username)
        
        axios.get(url1+'/'+this.state.username)
        .then((response)=>{
            const per=response.data
            console.log(per)
            this.setState({
                        data:per
                    })
            // console.log( "stored data "+ this.state.data.name)
        })
        .catch(e=>{
            console.log(e)
        })
        console.log( "stored data "+ this.state.data.name)
        var uname=this.state.data.id, upass=this.state.data.password
        console.log("user details"+uname + "\t"+upass)
        if(uname==this.state.username && upass==this.state.password)
        {   
            // console.log(this.state.username)
            this.props.navigation.navigate('loginhome',{name:this.state.username})
           
        }
            else 
            alert("not valid details");
    }

    signup=()=>{
        this.props.navigation.navigate('Register')
    }
}

const styles=StyleSheet.create({
    container:{
        // alignItems:'center',
        flex:1,
        backgroundColor:'#7986cb',
        paddingLeft:40,
        paddingRight:40
    },
    image:{
        alignItems:'center'
    },
    kview:{
        // alignItems:'center',
        // alignContent:'center'
    },
    input:{
        // textAlign:'center',
        // height:40,

        marginBottom:20,
        color:"#ffff",
        borderBottomWidth:1,
        borderBottomColor:"#f8f8f8"
    },
    loginbtn:{
        alignItems:'center',
        padding:20,
        backgroundColor:'#2962ff'
    },
    signupbtn:{
        alignItems:"flex-end",
        color:"#2962ff"
    }

});