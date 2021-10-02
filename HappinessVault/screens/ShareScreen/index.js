import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';

import styles from './styles';
import AddToVault from '../../components/AddToVault';
import AddFriendVault from '../../components/AddFriendVault';

const background = require('../../assets/images/brushstrokes.jpg');

function ShareScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>Add to a friend's vault</Text>
        <AddFriendVault />
      </ImageBackground>
    </View>
  );
}

export default ShareScreen;
