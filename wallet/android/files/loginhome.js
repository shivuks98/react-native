import 'react-native-gesture-handler'
import * as React from 'react';
// import React from 'react';
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
import profile from './profile'
import wallet from './wallet'

const tab=createBottomTabNavigator();
// const stack=createStackNavigator();


// export default  loginhome =(props)=>{
// console.warn(props.route.params.name)
// return(
//     <Text>hii</Text>
// )
// }

export default class loginhome extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:this.props.route.params.name
            // name:this.props.navigation.getParam('name')
        }
 
    }
    
  render(){
//    console.warn(this.props.route.params)
    return(
    // <Text>hii</Text>
        
    // 
        <tab.Navigator style={styles.tabbar}>
            <tab.Screen name='Home' component={homescreen} style={styles.nav} initialParams={this.state}/>
            <tab.Screen name='Wallet' component={wallet} initialParams={this.state} />
            <tab.Screen name='Payment History' component={payment} initialParams={this.state} />
            <tab.Screen name='Profile' component={profile} initialParams={this.state} />


            
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

function payment(){
    return(
    <View style={styles.tabs}>
        <Text style={styles.tabss}>
            this is paymet history screen
        </Text>
    </View>
    )
}


const styles= StyleSheet.create({
    tabs:{
        alignItems:'center',
        flex:1,
        backgroundColor:'#64b5f6'
    },
    nav:{
        alignItems:'center',
        backgroundColor: '#64b5f6',
        fontSize:20
        
    },
    tabbar:{
        alignContent:'center',
        paddingBottom:10,
        backgroundColor:'blue',
        color:'red',
    }
});