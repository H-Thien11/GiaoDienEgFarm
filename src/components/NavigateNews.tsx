import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pileofpillows from '../screens/Home/PileOfPillows';
import News from '../screens/News';
import Detail from '../screens/News/Detail';
import Saved from '../screens/News/Saved';

const Stack = createNativeStackNavigator();

export default function NavigateManage() {
  return (
    <Stack.Navigator
      initialRouteName="News"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="News" component={News} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Saved" component={Saved} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
