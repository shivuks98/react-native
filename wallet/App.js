/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
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
import home from './android/files/home.js'
import register from './android/files/register'
import loginhome from './android/files/loginhome';
import profile from './android/files/profile'
import storedata from './android/files/storedata'
import readdata from './android/files/readdata'
import readldata from './android/files/readlocal'
import wallet from './android/files/wallet'
import addMoney from './android/files/addMoney'


const stack=createStackNavigator();
export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <stack.Navigator>
          
         {/* <stack.Screen name="hello" component={Homescreen}/>  */}
          <stack.Screen name="home" component={home}/>
          {/* <stack.Screen name="storedata" component={storedata}/> */}
          <stack.Screen name="loginhome" component={loginhome}/>
          <stack.Screen name="profile" component={profile}/> 
          <stack.Screen name="Register" component={register}/>
          <stack.Screen name="wallet" component={wallet}/>
          <stack.Screen name="addMoney" component={addMoney}/>
          {/* <stack.Screen name="storedata" component={storedata}/> */}
          {/* <stack.Screen name="readdata" component={readdata}/> */}
          {/* <stack.Screen name="readldata" component={readldata}/> */}
        </stack.Navigator>

      </NavigationContainer>      
    )

  }
}
function Homescreen({navigation}){
  return(
    <View style={styles.scrollView}>
      <Text>Hello</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('settings')}>
      <Text >Login</Text> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#64b5f6',
    flex:1,
    alignItems:'center'
  }
});
