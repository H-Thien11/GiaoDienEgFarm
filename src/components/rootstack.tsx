import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabBottom from './TabBottom';
//GetStarted
import LayOut1 from '../screens/GetStarted/LayOut1';
import LayOut2 from '../screens/GetStarted/LayOut2';
import LayOut3 from '../screens/GetStarted/LayOut3';
import LayOut4 from '../screens/GetStarted/LayOut4';
//AuthForm
import LogIn from '../screens/AuthForm/LogIn';
import Register from '../screens/AuthForm/Register';
import ResendOTP from '../screens/AuthForm/Resend/OTP';
import ResendKYC from '../screens/AuthForm/Resend/KYC';
import CameraKYC from '../screens/AuthForm/Resend/Camera';
//Home
import ActivateStampsFirst from '../screens/Home/ActivateStampsFirst';
import ActivateStampsSecond from '../screens/Home/ActivateStampsSecond';
//Manage
import MyFarm from '../screens/Manage/MyFarm';
import MyAgriculturalProcessFist from '../screens/Manage/MyAgriculturalProcessFist';
import CreateProcess from '../screens/Manage/CreateProcess';
import MyAgriculturalProcessSecond from '../screens/Manage/MyAgriculturalProcessSecond';
import Chart from '../screens/Manage/Chart';
import AgriculturalProcess from '../screens/Manage/AgriculturalProcess';
import IncubateRawMaterialsFist from '../screens/Manage/IncubateRawMaterialsFist';
import IncubateRawMaterialsSecond from '../screens/Manage/IncubateRawMaterialsSecond';
import Information from '../screens/Information';
import RecentQuotes from '../screens/Manage/RecentQuotes';
import Weather from '../screens/Manage/Weather';
// News
import Detail from '../screens/News/Detail';
import Saved from '../screens/News/Saved';
//Information
import Profile from '../screens/Information/Profile';
import Manage from '../screens/Manage';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Layout1"
      screenOptions={{
        headerShown: false,
      }}>
      {/* GetStarted */}
      <Stack.Screen name="Layout1" component={LayOut1} />
      <Stack.Screen name="Layout2" component={LayOut2} />
      <Stack.Screen name="Layout3" component={LayOut3} />
      <Stack.Screen name="Layout4" component={LayOut4} />
      {/* AuthForm */}
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResendOTP" component={ResendOTP} />
      <Stack.Screen name="ResendKYC" component={ResendKYC} />
      <Stack.Screen name="CameraKYC" component={CameraKYC} />
      {/* Home */}
      <Stack.Screen name="Home" component={TabBottom} />
      <Stack.Screen
        name="ActivateStampsFirst"
        component={ActivateStampsFirst}
      />
      <Stack.Screen
        name="ActivateStampsSecond"
        component={ActivateStampsSecond}
      />
      {/* Manage */}
      <Stack.Screen name="RecentQuotes" component={RecentQuotes} />
      <Stack.Screen name="Weather" component={Weather} />
      <Stack.Screen
        name="IncubateRawMaterialsFist"
        component={IncubateRawMaterialsFist}
      />
      <Stack.Screen
        name="IncubateRawMaterialsSecond"
        component={IncubateRawMaterialsSecond}
      />
      {/* News */}
      {/* <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Saved" component={Saved} /> */}
      {/* Information */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
    </Stack.Navigator>
  );
}
