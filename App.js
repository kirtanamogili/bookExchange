import React from 'react';
import { render } from 'react-dom';
import Realm from 'realm';
import Logon from './src/components/Logon'
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
    <Logon/>
    
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

