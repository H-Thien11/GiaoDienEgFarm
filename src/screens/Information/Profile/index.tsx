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
        {/* Image */}
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
        {/* information */}
        <View style={styles.containerInformation}>
          {/* item 1 */}
          <View style={{marginTop: '7%', marginBottom: '3%'}}>
            <Text style={[styles.font700, styles.label]}>Name</Text>
            <TextInput
              style={[styles.font300, styles.textInput]}
              placeholderTextColor={colors.white}
              placeholder="Name"></TextInput>
            <Image
              style={{position: 'absolute', right: 0, top: '60%'}}
              source={images.penline}
            />
          </View>
          {/* item 2 */}
          <View style={{marginBottom: '3%'}}>
            <Text style={[styles.font700, styles.label]}>Role</Text>
            <TextInput
              style={[styles.font300, styles.textInput]}
              placeholderTextColor={colors.white}
              placeholder="Production staff"></TextInput>
            <Image
              style={{position: 'absolute', right: 0, top: '60%'}}
              source={images.penline}
            />
          </View>
          {/* item */}
          <View style={{marginBottom: '3%'}}>
            <Text style={[styles.font700, styles.label]}>Email</Text>
            <TextInput
              style={[styles.font300, styles.textInput]}
              placeholderTextColor={colors.white}
              placeholder="Name@gmail.com"></TextInput>
            <Image
              style={{position: 'absolute', right: 0, top: '60%'}}
              source={images.penline}
            />
          </View>
          {/* item */}
          <View style={{marginBottom: '3%'}}>
            <Text style={[styles.font700, styles.label]}>Phone</Text>
            <TextInput
              style={[styles.font300, styles.textInput]}
              placeholderTextColor={colors.white}
              placeholder="0987656789"></TextInput>
            <Image
              style={{position: 'absolute', right: 0, top: '60%'}}
              source={images.penline}
            />
          </View>
          {/* item */}
          <View style={{marginBottom: '3%'}}>
            <Text style={[styles.font700, styles.label]}>Address</Text>
            <TextInput
              style={[styles.font300, styles.textInput]}
              placeholderTextColor={colors.white}
              placeholder="294khuongviet"></TextInput>
            <Image
              style={{position: 'absolute', right: 0, top: '60%'}}
              source={images.penline}
            />
          </View>
        </View>
        {/* Text */}
        <Text style={[styles.font300, styles.text]}>Application</Text>
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.font300, styles.textButton]}>
            Blockchain solution for access
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
