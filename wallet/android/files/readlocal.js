import 'react-native-gesture-handler'
import React from 'react'
import {TouchableOpacity,StyleSheet,Text, View,TextInput,ActivityIndicator} from 'react-native'
// const user={name:'',phone:''}
// const url='https://reactnative.dev/movies.json';
const url1="http://10.0.2.2:3000/user";
// const url2="192.168.105.175:3000/user"
export default class readlocal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            data:null,
            username:'',
            phone:'',
            
        }
    }
    
    componentDidMount(){
        return fetch(url1)
        .then( (response)=>response.json())
        .then ( (responseJson)=>{
            // console.log(responseJson)
            this.setState({
                isLoading:false,
                data:responseJson,
                // data:JSON.stringify(responseJson),
                // username:responseJson.name,
                // phone:responseJson.phone
                // url:responseJson.

            })
        })
        .catch((error)=>{
            console.log("this is error"+error)
        })
    }


    render(){
        // return(
        //     <Text>loaded</Text>
        // )
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                </View>
            )
        }
        else{
            console.log("from data var "+this.state.data)
            
            let name=this.state.data.map((val,key)=>{
                return <View key={key}>
                    <Text>{val.name}</Text>
                    <Text>{val.phone}</Text>

                </View>
            })
            return(               
            <View>
              {name}
            </View>
            )
        }
    }
}