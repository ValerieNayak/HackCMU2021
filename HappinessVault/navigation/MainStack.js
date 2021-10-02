import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function MainStack(user, updateUser) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={(user, updateUser)}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
