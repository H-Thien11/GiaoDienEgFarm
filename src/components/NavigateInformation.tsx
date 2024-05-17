import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pileofpillows from '../screens/Home/PileOfPillows';

const Stack = createNativeStackNavigator();

export default function NavigateManage() {
  return (
    <Stack.Navigator
      initialRouteName="Pileofpillows"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Pileofpillows" component={Pileofpillows} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
