import React from 'react';
import {Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from '../components/color';
import {images} from '../assets/theme/images';

import Home from '../screens/Home';
import Manage from '../screens/Manage';
import News from '../screens/News';
import Information from '../screens/Information';
import Pileofpillows from '../screens/Home/PileOfPillows';
import NavigateManage from './NavigateManage';
import NavigateNews from './NavigateNews';
import NavigateInformation from './NavigateInformation';

const Tab = createBottomTabNavigator();
export default function TabBottom() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSource, customSizeWidth;

          if (route.name === 'Home') {
            iconSource = focused ? images.iconHome : images.iconHomeOutline;
            customSizeWidth = focused ? size + 11 : size + 11;
          } else if (route.name === 'Manage') {
            iconSource = focused ? images.iconManage : images.iconManageOutline;
            customSizeWidth = focused ? size + 19 : size + 19;
          } else if (route.name === 'News') {
            iconSource = focused ? images.iconNews : images.iconNewsOutline;
            customSizeWidth = focused ? size + 8 : size + 8;
          } else if (route.name === 'Information') {
            iconSource = focused
              ? images.iconInformation
              : images.iconInformationOutline;
            customSizeWidth = focused ? size + 37 : size + 37;
          }

          return (
            <View style={{alignItems: 'center'}}>
              <Image
                source={iconSource}
                style={{width: customSizeWidth, height: size + 18}}
              />
            </View>
          );
        },
        tabBarStyle: {
          height: '7%',
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
      {/* <Tab.Screen name="Manage" component={Manage} /> */}
      <Tab.Screen name="Manage" component={NavigateManage} />
      <Tab.Screen name="News" component={NavigateNews} />
      <Tab.Screen name="Information" component={NavigateInformation} />
    </Tab.Navigator>
  );
}
