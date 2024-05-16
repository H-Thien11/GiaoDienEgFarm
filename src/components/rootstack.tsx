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
import AddProductionLog from '../screens/Home/AddProductionlog';
import ActivateStampsFirst from '../screens/Home/ActivateStampsFirst';
import ActivateStampsSecond from '../screens/Home/ActivateStampsSecond';
import Pileofpillows from '../screens/Home/PileOfPillows';
//Manage
import MyFarm from '../screens/Manage/MyFarm';
import MyAgriculturalProcessFist from '../screens/Manage/MyAgriculturalProcessFist';
import MyAgriculturalProcessSecond from '../screens/Manage/MyAgriculturalProcessSecond';
import FertilizerInformation from '../screens/Manage/FertilizerInformation';
import AgriculturalProcess from '../screens/Manage/AgriculturalProcess';
import IncubateRawMaterialsFist from '../screens/Manage/IncubateRawMaterialsFist';
import Information from '../screens/Information';
import Chart from '../screens/Manage/Chart';
//News
import Detail from '../screens/News/Detail';
import News from '../screens/News/';
//Information
import Profile from '../screens/Information/Profile';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Chart></Chart>
  );
}
