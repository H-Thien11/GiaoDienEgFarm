import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Information from '../screens/Information';
import Profile from '../screens/Information/Profile';

const Stack = createNativeStackNavigator();

export default function NavigateManage() {
  return (
    <Stack.Navigator
      initialRouteName="Information"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Information" component={Information} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
