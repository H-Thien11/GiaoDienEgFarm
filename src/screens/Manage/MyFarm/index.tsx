import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {images} from '../../../assets/theme/images';
import Title from '../../../components/Title';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

export default function Index() {
  const navigation = useNavigation() as any;
  const input = useRef<OTPTextView>(null);
  const handleCellTextChange = async (text: any, i: any) => {
    if (i === 0) {
      const clippedText = await Clipboard.getString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };
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
          <Text style={[styles.texttitle, styles.font]}>My farm</Text>
        </View>

        {/* image */}
        <View style={styles.imageContainer}>
          <Image style={styles.imageUserBG} source={images.userBackGround} />
          <Image style={styles.imageUser} source={images.user} />

          <View style={styles.textContainer}>
            <Text style={styles.textName}>Name</Text>
            <Text style={styles.textfirst}>Address</Text>
          </View>
        </View>

        {/* Input */}
        <View style={styles.containerInput}>
          <Text style={[styles.lable]}>
            Product's name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />

          <Text style={[styles.lable]}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />

          <Text style={[styles.lable]}>
            My farm location
          </Text>
          <TextInput
            style={styles.input}
            placeholder="My farm location"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />

          <Text style={[styles.lable]}>
            Expected harvest yield
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Expected harvest yield"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />
        </View>
      </View>
    </ImageBackground>
  );
}