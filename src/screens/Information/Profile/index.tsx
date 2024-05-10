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
import colors from '../../../components/color';
import {useNavigation} from '@react-navigation/native';

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
          <Text style={[styles.texttitle, styles.font700]}>Profile</Text>
          <Image style={{}} source={images.bell} />
        </View>

        <View style={styles.containerImg}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Image source={images.AndreaCebreros} />
            <Image
              style={{top: '2%', right: '5%'}}
              source={images.camerawhite}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: '5%'}}>
            <Text
              style={[styles.font700, styles.texttitle, {color: colors.green}]}>
              Name
            </Text>
            <Image
              style={{left: '200%', marginTop: '1%'}}
              source={images.penline}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
