import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './style';

import {images} from '../../../assets/theme/images';
import colors from '../../../components/color';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5Pro';
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
          <Text style={[styles.texttitle, styles.font700]}>News</Text>
          <Image style={{marginLeft: '60%'}} source={images.bookmarksolid} />
          <Image style={{}} source={images.bell} />
        </View>
        {/* product */}
        <View style={styles.img}>
          <Image style={{width: '100%', height: '100%', borderRadius: 40}} source={images.product4} />
        </View>
        <View style={styles.containerproduct}></View>
      </View>
    </ImageBackground>
  );
}
