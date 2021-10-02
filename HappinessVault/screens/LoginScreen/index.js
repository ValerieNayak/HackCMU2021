import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
// import UserContext from '../../contexts/UserContext';

function LoginScreen({updateUser}) {
  const [name, setName] = useState('');

  async function createUser(name) {
    // this function will create a new user in the database, return id
    const reqBody = {
      username: name,
    };

    fetch('http://localhost:9000/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        updateUser(json);
      })
      .catch(error => console.error(error));
  }

  async function submitName() {
    console.log('submitting', name);
    await createUser(name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hi! What's your name?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}></TextInput>
      <TouchableOpacity onPress={submitName}>
        <View style={styles.enterButton}>
          <Text style={styles.enterText}>Enter</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;