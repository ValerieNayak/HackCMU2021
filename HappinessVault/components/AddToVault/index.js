import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont();

function PostMessage(msg) {
  msgBody = {
    userid: 'val1234',
    message: msg,
  };
  fetch('http://localhost:9000/messages/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(msgBody),
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })
    .catch(error => console.error(error));
}

function AddToVault() {
  const [inputText, setInputText] = useState('');

  function submitText() {
    console.log('submitted', inputText);
    PostMessage(inputText);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add to Vault</Text>
      <TextInput
        style={styles.input}
        multiline={true}
        onChangeText={text => setInputText(text)}
      />
      <TouchableOpacity onPress={submitText}>
        <AntDesign name="pluscircleo" size={30} color={'green'} />
      </TouchableOpacity>
    </View>
  );
}

export default AddToVault;
