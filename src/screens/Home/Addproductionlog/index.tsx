import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './style';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';


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
            Add production log
          </Text>
        </View>
        {/* secsion */}
        <View style={{flex: 1}}>
          {/* text */}
          <View>
            <Text style={styles.textfirst}>What do you want to do today?</Text>
          </View>
          {/* input */}
          <TouchableOpacity activeOpacity={0.7}>
            <View style={[styles.inputcontent]}>
              <TextInput
                editable={false}
                style={[styles.input]}
                placeholder="Process of planting straw"
                placeholderTextColor="rgba(255, 255, 255, 1)"
              />

              <Image source={images.tickicon} style={styles.tick} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
