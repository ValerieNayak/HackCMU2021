import React from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';

import styles from './styles';
import AddToVault from '../../components/AddToVault';
import ReadFromVault from '../../components/ReadFromVault';

const background = require('../../assets/images/brushstrokes.jpg');

function HomeScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.title}>The Happiness Vault</Text>
        <AddToVault />
        <ReadFromVault />
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
