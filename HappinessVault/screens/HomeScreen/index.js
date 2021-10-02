import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './styles';
import AddToVault from '../../components/AddToVault';
import ReadFromVault from '../../components/ReadFromVault';

function HomeScreen({navigation, route}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The Happiness Vault</Text>
      <AddToVault />
      <ReadFromVault />
    </SafeAreaView>
  );
}

export default HomeScreen;
