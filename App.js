import React from 'react';
import Realm from 'realm';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
let realm;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:""
    };
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: UserSchema,
    });
  }

  register_user = () => {
    var that = this;
    const { email } = this.state;
    const { password } = this.state;
    if (email) {
      if (password) {
          realm.write(() => {
            var ID =
              realm.objects('User').sorted('first_name', true).length > 0
                ? realm.objects('User').sorted('user_id', true)[0]
                    .user_id + 1
                : 1;
            realm.create('user_details', {
              user_id: ID,
              user_name: that.state.user_name,
              user_contact: that.state.user_contact,
              user_address: that.state.user_address,
            });
            Alert.alert(
              'Success',
              'You are registered successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          });
        } else{
          alert('Please fill Password');  
        }
      } else {
        alert('Please fill Email');
      }
    } 
  };
  
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>bookExchange</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor = "#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
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

const UserSchema = {
  name: 'User',
  properties: {
    _id: 'objectId?',
    email: 'string?',
    first_name: 'string?',
    last_name: 'string?',
    location: 'string?',
  },
  primaryKey: '_id',
};

const realm = await Realm.open({
  path: "userData",
  schema: [UserSchema],
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607B7D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    fontWeight:"bold",
    fontSize:50,
    color: "#FB9B5A",
    marginBottom:40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#3A606E",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#98473E",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});