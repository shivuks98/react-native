import 'react-native-gesture-handler'
import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,TextInput,Image}from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lhome from './loginhome';
const stack=createStackNavigator();
const userInfo={ username:"admin",password:"pass"}

export default class home extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''}
    }
    render(){
        return (

        

            <View style={styles.container}>
                <View>
                    <Image source={require('../files/images/wallet_logo1.png')}/>
                </View>
                <View>
                    <TextInput placeholder="Username" 
                    onChangeText={(username)=>this.setState({username})}
                    // onChangeText={(password)=>this.setState({password})}
                    />
                    <TextInput placeholder="password" 
                    onChangeText={(password)=>this.setState({password})}/>
                </View>
                <View>
                    <TouchableOpacity onPress={this.login} 
                    
                    >
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
    
    login=()=>{

        if(userInfo.username==this.state.username && userInfo.password==this.state.password)
        {   
            this.props.navigation.navigate('loginhome',{username:this.state.username,password:this.state.password})
            // <NavigationContainer>
            //     <stack.Navigator>
            //         <stack.Screen name='loginhome' component={lhome}/>
            //     </stack.Navigator>
            // </NavigationContainer>
        }
            else 
            alert("not valid details");
    }
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        padding:10

    }

});