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
import Icon from 'react-native-vector-icons/FontAwesome6';
const MyIcon = <Icon name="book" size={30} color="#900" />;
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
          <Image style={{marginLeft: '60%'}} source={images.bookmark} />
          <Image style={{}} source={images.bell} />
        </View>
        <Icon name="bookmark" size={50} color={'#900'}/>
      </View>
    </ImageBackground>
  );
}
