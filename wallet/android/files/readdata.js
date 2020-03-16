import 'react-native-gesture-handler'
import React from 'react'
import {TouchableOpacity,StyleSheet,Text, View,TextInput,ActivityIndicator} from 'react-native'
// const user={name:'',phone:''}
const url='https://reactnative.dev/movies.json';
// const url1='http://10.0.2.2:8081/user';
export default class readdata extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            data:null,
            username:'',
            phone:'',
            
        }
    }
    // componentDidMount(){
    //     // fetch('	https://webhook.site/fcc2afac-26b9-40cb-94cf-bba26dfef658')
    //     fetch('https://webhook.site/token/fcc2afac-26b9-40cb-94cf-bba26dfef658/request/761965fe-8db0-4bf8-89cf-b9e7c7d43e86/raw')
    //     .then( (response)=>response.josn())
    //     .then( (responseJson)=>{
    //        this.setState({
    //            isLoad:false,
    //            data:responseJson.details
    //        }) 
           
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    componentDidMount(){
        return fetch(url)
        
        .then( (response)=>response.json())
        .then ( (responseJson)=>{
            // console.log(responseJson)
            this.setState({
                isLoading:false,
                data:responseJson.movies,
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

            
        //     <View>
        //         <Text>
        //             hih
        //             {this.state.username}
        //         </Text>
        //     </View>
        // )
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator/>
                     {/* <Text>
                    not loaded
                </Text> */}
                </View>
            )
        }
        else{
            let movies=this.state.data.map((val,key)=>{
                return <View key={key}>
                    <Text>{val.title}</Text>
                </View>
            })
            return(
            <View>
                {/* <Text> */}
                    {movies}
                {/* </Text> */}
            </View>
            )
        }
    }
}