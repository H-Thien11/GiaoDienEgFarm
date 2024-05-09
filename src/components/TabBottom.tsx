import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../components/color';
import {images} from '../assets/theme/images';

import Home from '../screens/Home';
import Manage from '../screens/Manage';
import News from '../screens/News';
import Information from '../screens/Information';
import Pileofpillows from '../screens/Home/Pileofpillows';



const Tab = createBottomTabNavigator();
export default function TabBottom() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSource, customSizeWidth;

          if (route.name === 'Home') {
            iconSource = focused ? images.iconHome : images.iconHomeOutline;
            customSizeWidth = focused ? size : size;
          } else if (route.name === 'Manage') {
            iconSource = focused ? images.iconManage : images.iconManageOutline;
            customSizeWidth = focused ? size + 10 : size + 10;
          } else if (route.name === 'News') {
            iconSource = focused ? images.iconNews : images.iconNewsOutline;
            customSizeWidth = focused ? size : size;
          } else if (route.name === 'Information') {
            iconSource = focused
              ? images.iconInformation
              : images.iconInformationOutline;
            customSizeWidth = focused ? size + 28 : size + 28;
          }

          return (
            <View style={{alignItems: 'center'}}>
              <Image
                source={iconSource}
                style={{width: customSizeWidth, height: size + 10}}
              />
            </View>
          );
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.tab,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowOffset: {width: 4, height: 0}, // Đặt đổ bóng theo chiều ngang
          shadowColor: 'rgba(0, 0, 0, 0.05)', // Màu của đổ bóng
          shadowOpacity: 0.5, // Độ mờ của đổ bóng
          shadowRadius: 4, // Bán kính của đổ bóng
          elevation: 10, // Độ cao của đổ bóng (cho Android)
        },
        headerShown: false,
        tabBarLabelStyle: {display: 'none'},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Manage" component={Manage} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Information" component={Information} />
    </Tab.Navigator>
  );
}
