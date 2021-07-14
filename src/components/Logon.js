import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Logon.style.js'

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
            <View style={styles.container}>
            <Text style={styles.logo}>bookExchange</Text>
            <View style={styles.inputView} >
                <TextInput
                style={styles.inputText}
                placeholder="Email..."
                placeholderTextColor = "#003f5c"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView}>
                <TextInput
                secureTextEntry
                styles={styles.inputText}
                placeholder={"Pasword..."}
                placeholderTextColor="#003f5c"
                onChangeText={text=> this.setState({password:text})} />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>
            </View>
        );
    }
}