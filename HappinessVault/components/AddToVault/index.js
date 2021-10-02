import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont();

async function PostMessage(msg) {
  msgBody = {
    userid: '6157efde4405bc624b27aea0',
    message: msg,
    sendername: 'valerie',
    senderId: '6157efde4405bc624b27aea0',
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

  async function submitText() {
    console.log('submitted', inputText);
    await PostMessage(inputText);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add to Vault</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={text => setInputText(text)}
          placeholder={'Your message'}
        />
      </View>
      <TouchableOpacity onPress={submitText}>
        <AntDesign name="pluscircleo" size={30} color={'green'} />
      </TouchableOpacity>
    </View>
  );
}

export default AddToVault;
