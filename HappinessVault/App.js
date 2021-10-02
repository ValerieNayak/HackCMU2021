/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext} from 'react';
// import type {Node} from 'react';
import Node from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Colors from './constants/Colors';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MainStack from './navigation/MainStack';

const App: () => Node = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [user, updateUser] = useState({});

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.lightYellow}}>
      <MainStack user={user} updateUser={updateUser} />
    </SafeAreaView>
  );
};

export default App;
