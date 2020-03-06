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
import loginhome from './android/files/loginhome';
import profile from './android/files/profile'

const stack=createStackNavigator();
export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <stack.Navigator>
          {/* <stack.Screen name="hello" component={Homescreen}/> */}
          {/* <stack.Screen name='settings' component={home}/> */}
          {/* <stack.Screen name="loginhome" component={loginhome}/> */}
          <stack.Screen name="profiles" component={profile}/>
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
