import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from '../../assets/theme/images';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();
export default function Information() {
  return (
    // rgba(42, 252, 255, 1) //blue
    // rgba(42, 255, 89, 0) //green
    // rgba(255, 255, 255, 0.4) trắng
    // rgba(238, 237, 237, 0) //xám
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(42, 252, 255, 1)', 'rgba(42, 255, 89, 0)']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={styles.gradient1}>
          <LinearGradient
            colors={['rgba(238, 237, 237, 0.3)', 'rgba(42, 255, 89, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradient2}></LinearGradient>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
}
