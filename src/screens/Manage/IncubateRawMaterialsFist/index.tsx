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
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';

export default function Pileofpillows() {
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
            Incubate raw materials
          </Text>
        </View>
        {/* secsion */}
        <View style={{flex: 1}}>
          {/* text */}
          <View>
            <Text style={styles.textfirst}>
              You want to ferment the ingredients?
            </Text>
          </View>
          {/* input production area */}
          <View style={[styles.inputcontent]}>
            <Text style={[styles.labelfirts, styles.textlable]}>
              Production area
            </Text>
            <TextInput
              style={[styles.input]}
              placeholder="dfghgf345533"
              placeholderTextColor="rgba(255, 255, 255, 1)"
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.map}>
              <Image
                source={images.iconscanseri}
                style={{width: '70%', height: '80%'}}
              />
            </TouchableOpacity>
          </View>
          {/* input Harvest period */}
          <View style={[styles.inputcontentsecond]}>
            <Text style={[styles.labelsecond, styles.textlable]}>Describe</Text>
            <TextInput
              style={[styles.inputsecond]}
              editable
              multiline
              numberOfLines={8}
              placeholder="Enter a description"
              placeholderTextColor="rgba(255, 255, 255, 0.4)"
            />
          </View>
          {/* input Harvest period */}

          <View style={[styles.inputcontentsecond]}>
            <Text style={[styles.labelthird, styles.textlable]}>
              Add Photos
            </Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.addphoto}>
              <TextInput
                style={[styles.inputthird]}
                editable={false}
                multiline
                numberOfLines={8}
              />
              <View style={[styles.add]}>
                <Image source={images.addphoto} />
                <Text style={[styles.noteadd]}>
                  (Note: take maximum 4 photos)
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* button */}
          <View style={styles.containerButon}>
            {/* button Completed  */}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('IncubateRawMaterialsSecond')}>
              <LinearGradient
                locations={[0, 1]}
                colors={['#2AFCFF', '#00FB91']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}>
                <Text style={[styles.completed, styles.font]}>More</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* button cancel */}
            <TouchableOpacity
              style={[styles.button, styles.buttoncancel]}
              activeOpacity={0.3}
              onPress={() => navigation.goBack()}>
              <Text style={[styles.cancel, styles.font]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
