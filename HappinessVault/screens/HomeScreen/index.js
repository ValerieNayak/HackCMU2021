import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import AddToVault from '../../components/AddToVault';
import ReadFromVault from '../../components/ReadFromVault';

function HomeScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Happiness Vault</Text>
      <AddToVault user={route.params.user} />
      <ReadFromVault />
    </View>
  );
}

export default HomeScreen;
