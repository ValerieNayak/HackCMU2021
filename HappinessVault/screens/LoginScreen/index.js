import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {StackActions, CommonActions} from '@react-navigation/native';

function LoginScreen({navigation, route}) {
  const [name, setName] = useState('');
  // const {user, updateUser} = route;
  console.log('route: \n', route);

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
      })
      .catch(error => console.error(error));
  }

  async function submitName() {
    console.log('submitting', name);
    await createUser(name);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Tabs'}],
      }),
    );
  }

  const background = require('../../assets/images/login-bg.jpg');

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={background}
        resizeMode="cover">
        <Text style={styles.greetingText}>Hi! What's your name?</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={text => setName(text)}
            placeholder={'name'}
          />
        </View>

        <TouchableOpacity onPress={submitName}>
          <View style={styles.enterButton}>
            <Text style={styles.enterText}>Enter</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default LoginScreen;
