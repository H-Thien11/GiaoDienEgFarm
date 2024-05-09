import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabBottom from './TabBottom';
//GetStarted
import LayOut1 from '../screens/GetStarted/Layout1';
import LayOut2 from '../screens/GetStarted/Layout2';
import LayOut3 from '../screens/GetStarted/Layout3';
import LayOut4 from '../screens/GetStarted/Layout4';
//AuthForm
import LogIn from '../screens/AuthForm/LogIn';
import Register from '../screens/AuthForm/Register';
import ResendOTP from '../screens/AuthForm/Resend/OTP';
import ResendKYC from '../screens/AuthForm/Resend/KYC';
import CameraKYC from '../screens/AuthForm/Resend/Camera';
//Home
import AddProductionLog from '../screens/Home/AddProductionLog';
import ActivateStampsFirst from '../screens/Home/ActivateStampsFirst';
import ActivateStampsSecond from '../screens/Home/ActivateStampsSecond';
import Pileofpillows from '../screens/Home/PileOfPillows';
//Manage
import MyFarm from '../screens/Manage/MyFarm';
import MyAgriculturalProcess from '../screens/Manage/MyAgriculturalProcess';
import FertilizerInformation from '../screens/Manage/FertilizerInformation';
import AgriculturalProcess from '../screens/Manage/AgriculturalProcess';
import IncubateRawMaterialsFist from '../screens/Manage/IncubateRawMaterialsFist';
import Information from '../screens/Information';

//Information



const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Layout1"
      screenOptions={{
        headerShown: false,
      }}>
      {/* GetStarted */}
      {/* <Stack.Screen name="Layout1" component={LayOut1} />
      <Stack.Screen name="Layout2" component={LayOut2} />
      <Stack.Screen name="Layout3" component={LayOut3} />
      <Stack.Screen name="Layout4" component={LayOut4} /> */}
      {/* AuthForm */}
      {/* <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResendOTP" component={ResendOTP} />
      <Stack.Screen name="ResendKYC" component={ResendKYC} />
      <Stack.Screen name="CameraKYC" component={CameraKYC} /> */}
      {/* Home */}
      <Stack.Screen name="Home" component={TabBottom} />
      <Stack.Screen name="AddProductionLog" component={AddProductionLog} />
      <Stack.Screen
        name="ActivateStampsFirst"
        component={ActivateStampsFirst}
      />
      <Stack.Screen
        name="ActivateStampsSecond"
        component={ActivateStampsSecond}
      />
      <Stack.Screen name="Pileofpillows" component={Pileofpillows} />
    </Stack.Navigator>
  

  );
}
