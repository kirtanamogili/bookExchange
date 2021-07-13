import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import './Logon.css'

export default class Logon extends React.Component {
    constructor(){
        super()
        this.state = {
            email:"",
            password:""
        }
    }
    
    render() {
        return(
            <div>
                <View class='container'>
                <Text class='logo'>bookExchange</Text>
                <View class='inputView' >
                    <TextInput
                    class='inputText'
                    placeholder="Email..."
                    placeholderTextColor = "#003f5c"
                    onChangeText={text => this.setState({email:text})}/>
                </View>
                <View class='inputView' >
                    <TextInput
                    secureTextEntry
                    class='inputText'
                    placeholder={"Pasword..."}
                    placeholderTextColor="#003f5c"
                    onChangeText={text=> this.setState({password:text})} />
                </View>
                <TouchableOpacity>
                    <Text class='forgot'>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity class='loginBtn'>
                    <Text class='loginText'>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text class='loginText'>Signup</Text>
                </TouchableOpacity>
                </View>
            </div>
        );
    }
}