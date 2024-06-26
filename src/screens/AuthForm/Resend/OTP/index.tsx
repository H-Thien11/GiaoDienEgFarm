import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import TextGradient from '../../../../components/TextGradient';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import InputOTP from '../../../../components/InputOTP';
import {useNavigation} from '@react-navigation/native';
import Title from '../../../../components/Title';
import {images} from '../../../../assets/theme/images';


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
        {/* thanh tiêu đề */}
        <View style={styles.title}>
          <TouchableOpacity
            style={styles.goback}
            activeOpacity={0.3}
            onPress={() => navigation.goBack()}>
            <Image
              style={{width: 8, height: 13}}
              source={images.iconBack}></Image>
          </TouchableOpacity>
          <Text style={[styles.texttitle, styles.font]}>
            Enter the OTP code
          </Text>
        </View>

        {/* nội dung */}
        <View style={styles.content}>
          {/* CountdownCircleTimer */}
          <View style={styles.countdowncircletimer}>
            <CountdownCircleTimer
              isPlaying
              rotation={'counterclockwise'}
              strokeWidth={9}
              duration={20} // Thời gian đếm ngược (đơn vị: giây)
              colors={['#00FB91', '#00FB91', '#00FB91', '#00FB91']} // Màu sắc
              colorsTime={[10, 6, 3, 0]} // Thời gian chuyển màu
            >
              {({remainingTime}) => (
                <TextGradient
                  style={[styles.time, styles.font]}
                  text={`${remainingTime}`}
                  locations={[0, 1]}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  colors={['#00FFFF', '#009959']}
                />
              )}
            </CountdownCircleTimer>
          </View>

          {/* OTP input */}
          <InputOTP style={styles.inputOTP} />

          {/* button */}
          <View style={styles.containerButon}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('ResendKYC')}>
              <LinearGradient
                locations={[0, 1]}
                colors={['#2AFCFF', '#00FB91']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}>
                <Text style={[styles.resend, styles.font]}>RESEND</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {/* bottom */}
        <Image
          style={styles.bottomIMG}
          source={images.bottom}
        />
      </View>
    </ImageBackground>
  );
}
