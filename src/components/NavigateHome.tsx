import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home/';
import Pileofpillows from '../screens/Home/PileOfPillows';
import AddProductionLog from '../screens/Home/AddProductionLog';

const Stack = createNativeStackNavigator();

export default function NavigateHome() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pileofpillows" component={Pileofpillows} />
      <Stack.Screen name="AddProductionLog" component={AddProductionLog} />
    </Stack.Navigator>
  );
}

