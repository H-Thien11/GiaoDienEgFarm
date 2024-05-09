import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';


import {images} from '../../assets/theme/images';
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
          <Text style={[styles.texttitle, styles.font]}>Manage</Text>
          <Image style={{left: '240%'}} source={images.iconscanseri} />
          <Image style={{}} source={images.bell} />
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
            <Text style={styles.text}>My farm</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>

          {/* items 2 */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{justifyContent: 'center', marginBottom: '5%'}}>
            <Image source={images.backGroundRectangle2} />
            <Text style={styles.text}>My agricultural process</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>

          {/* items 3 */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{justifyContent: 'center', marginBottom: '5%'}}>
            <Image source={images.backGroundRectangle2} />
            <Text style={styles.text}>Chart</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>

          {/* items 4 */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{justifyContent: 'center', marginBottom: '5%'}}>
            <Image source={images.backGroundRectangle2} />
            <Text style={styles.text}>Fertilizer information</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>

          {/* items 5 */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{justifyContent: 'center', marginBottom: '5%'}}>
            <Image source={images.backGroundRectangle2} />
            <Text style={styles.text}>Agricultural process</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>

          {/* items 6 */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={{justifyContent: 'center', marginBottom: '5%'}}>
            <Image source={images.backGroundRectangle2} />
            <Text style={styles.text}>Traceability of product origin</Text>
            <Image style={styles.vertor} source={images.vector} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
