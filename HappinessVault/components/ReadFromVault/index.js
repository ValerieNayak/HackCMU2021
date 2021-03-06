import React, {useState, useContext} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import styles from './styles';

function ReadFromVault({user}) {
  const [message, updateMessage] = useState('');
  const [senderName, updateSenderName] = useState('');

  async function getRandomMessage() {
    const uid = '6157efde4405bc624b27aea0';
    fetch('http://localhost:9000/messages/random/' + uid)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        updateMessage(json.message);
        updateSenderName(json.sendername);
      })
      // .then(senderid => getSenderName(senderid))
      .catch(error => console.error(error));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{width: '100%', alignItems: 'center'}}
        onPress={getRandomMessage}>
        <View style={styles.button}>
          <Text style={styles.title}>Read from vault</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>{message}</Text>
        <Text>{senderName}</Text>
      </View>
    </View>
  );
}

export default ReadFromVault;
