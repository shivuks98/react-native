import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import home from './android/files/home.js'

const tab=createBottomTabNavigator();
// const stack=createStackNavigator();
export default class loginhome extends React.Component{
    constructor(props){
        super(props)
        
    }

    
  render(){
    return(
        <tab.Navigator style={styles.tabbar}>
            <tab.Screen name='Profile' component={profile}/>
            <tab.Screen name='Home' component={homescreen} style={styles.nav}/>
            
        </tab.Navigator>
        

    )

  }
}
function homescreen(){
    return(
    <View style={styles.tabs}>
        <Text style={styles.tabss}>
            this is home screen
        </Text>
    </View>
    )
}
function profiles(){
    // const {navigation}=this.props;
    // const username=this.navigation.getParam('username');
    // const username=this.getParam('username')
    // const password=navigation.getParam('password');
    return(
        <View>
                <Text>hii</Text>
                {/* <Text style={styles.textStyle}>User Name: {JSON.stringify(username)}</Text>  
                <Text style={styles.textStyle}>password: {JSON.stringify(password)}</Text>   */}
            </View>
        



    //     <Text style={styles.tabss}>
    //     this is profile screen
    // </Text>
    // this.props.navigation.navigate('profiles')
    //    this.props.navigation.navigate('profile')
    
    )
}
const styles= StyleSheet.create({
    tabs:{
        alignItems:'center'
    },
    nav:{
        alignItems:'center'
        
    },
    tabbar:{
        alignContent:'center',
        paddingBottom:10,
        backgroundColor:'blue',
        color:'red'
    }
});