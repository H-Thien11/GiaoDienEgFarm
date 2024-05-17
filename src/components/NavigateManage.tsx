import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Manage from '../screens/Manage';
import MyFarm from '../screens/Manage/MyFarm';
import MyAgriculturalProcessFist from '../screens/Manage/MyAgriculturalProcessFist';
import MyAgriculturalProcessSecond from '../screens/Manage/MyAgriculturalProcessSecond';
import CreateProcess from '../screens/Manage/CreateProcess';
import Chart from '../screens/Manage/Chart';
import FertilizerInformation from '../screens/Manage/FertilizerInformation';
import AgriculturalProcess from '../screens/Manage/AgriculturalProcess';
import TraceabilityOfProductOrigin from '../screens/Manage/TraceabilityOfProductOrigin';


const Stack = createNativeStackNavigator();

export default function NavigateManage() {
  return (
    <Stack.Navigator
      initialRouteName="Manage"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Manage" component={Manage} />
      <Stack.Screen name="MyFarm" component={MyFarm} />
      <Stack.Screen
        name="MyAgriculturalProcessFist"
        component={MyAgriculturalProcessFist}
      />
      <Stack.Screen name="CreateProcess" component={CreateProcess} />
      <Stack.Screen
        name="MyAgriculturalProcessSecond"
        component={MyAgriculturalProcessSecond}
      />
      <Stack.Screen name="Chart" component={Chart} />
      <Stack.Screen
        name="FertilizerInformation"
        component={FertilizerInformation}
      />
      <Stack.Screen
        name="AgriculturalProcess"
        component={AgriculturalProcess}
      />
      <Stack.Screen
        name="TraceabilityOfProductOrigin"
        component={TraceabilityOfProductOrigin}
      />
    </Stack.Navigator>
  );
}
