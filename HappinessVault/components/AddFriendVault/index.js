import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {Colors} from '../../constants/Colors';

AntDesign.loadFont();
FontAwesome.loadFont();

async function PostMessage(msg) {
  msgBody = {
    userid: '6157efde4405bc624b27aea0',
    message: msg,
    sendername: 'valerie',
    senderId: '6158d2ba7253b5224bcd1452',
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

function AddFriendVault() {
  const [inputText, setInputText] = useState('');

  async function submitText() {
    console.log('submitted', inputText);
    await PostMessage(inputText);
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Write your message</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          onChangeText={text => setInputText(text)}
          placeholder={'Write your message'}
        />
      </View>
      <View style={styles.friendInputContainer}>
        <TextInput style={styles.input} placeholder={'Which friend?'} />
      </View>
      <TouchableOpacity onPress={submitText}>
        {/* <AntDesign name="pluscircleo" size={30} color={'green'} /> */}
        <FontAwesome name="send" size={40} color={'#517AE0'} />
      </TouchableOpacity>
    </View>
  );
}

export default AddFriendVault;
