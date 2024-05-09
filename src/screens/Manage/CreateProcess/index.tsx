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
          <Text style={[styles.texttitle, styles.font]}>
            My agricultural process
          </Text>
        </View>
        {/* Input */}
        <View style={styles.containerInput}>
          <Text style={[styles.lable]}>Process name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />

          <Text style={[styles.lable]}>Lowest price</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />

          <Text style={[styles.lable]}>Biggest price</Text>
          <TextInput
            style={styles.input}
            placeholder="My farm location"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
          />
        </View>
        {/* button */}
        <View style={styles.containerButon}>
          {/* button Completed  */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => navigation.navigate('Home')}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#2AFCFF', '#00FB91']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradient}>
              <Text style={[styles.textbutton, styles.font]}>More</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}