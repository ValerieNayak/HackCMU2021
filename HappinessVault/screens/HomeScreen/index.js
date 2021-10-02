import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import AddToVault from '../../components/AddToVault';
import ReadFromVault from '../../components/ReadFromVault';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Happiness Vault</Text>
      <AddToVault />
      <ReadFromVault />
    </View>
  );
}

export default HomeScreen;
