import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';


import {images} from '../../../assets/theme/images';
import { useNavigation } from '@react-navigation/native';

export default function Manage() {
  const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={{flex: 1, top: '8%'}}>
        {/* title */}
        <View style={styles.title}>
          <TouchableOpacity
            style={styles.goback}
            activeOpacity={0.3}
            onPress={() => navigation.goBack()}>
            <Image style={{width: 8, height: 13}} source={images.iconBack} />
          </TouchableOpacity>
          <Text style={[styles.texttitle, styles.font]}>
            Agricultural process
          </Text>
        </View>

        {/* items container */}
        <View
          style={{
            alignItems: 'center',
            marginTop: '10%',
          }}>
          {/* items 1 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('MyFarm')}
            activeOpacity={0.7}
            style={{justifyContent: 'center', marginBottom: '5%'}}>
            <Image source={images.backGroundRectangle2} />
            <Text style={styles.text}>Choose agricultural processes</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
