import React, {Component} from 'react';
import {Alert, StyleSheet, Text,TextInput, View,Button } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username:'',
      password:'',

    };

  }
  onLogin(){
    const {username,password}=this.state;
    

    Alert.alert('Credentials',`${username} + ${password}`);

  }



render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChaneText={(username) => this.setState({username})}
          placeholder={'username'}
          style={styles.input}        
          />

        <TextInput
          value={this.state.password}
          onChaneText={password => this.setState({password})}
          placeholder={'password'}
          style={styles.input} 
          />
        <Button 
        disabled={!this.state.username  || !this.state.password }
        title = {'login'}
        style={styles.input}
        onPress={()=>this.onLogin()}
        />
      </View>
    );
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:200,
    height:40,
    padding:10,
    borderWidth:1,
    borderColor:'black',
    marginBottom:10,

  },
});
