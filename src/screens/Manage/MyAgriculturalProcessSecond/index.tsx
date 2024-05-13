import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {images} from '../../../assets/theme/images';

  import LineChart from '../../../components/raw';

export default function Index() {

  const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];
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
        {/* container */}
        <LinearGradient
          locations={[0, 1]}
          colors={['#00FB91', '#296934']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.containerGradient1}>
          <Text style={[styles.font400, styles.text01]}>Precio Actual</Text>
          <Text style={[styles.font700, styles.text02]}>
            HS Code: 070200 - Tomatoes - fresh or chilled
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginLeft: '10%',
            }}>
            <Text style={[styles.font900, styles.text03]}>$19.50</Text>
            <Text style={[styles.font500, styles.text04]}>+0.13%</Text>
          </View>
          <Text style={[styles.font900, styles.text05]}>
            USD / Carton Box (11.3398kg = 25lbs), Aug 09, 2021
          </Text>
        </LinearGradient>
        {/* Market price */}
        <Text style={[styles.font700, styles.textlabel]}>Market price</Text>
        {/* <FlatList
          data={products}
          style={{marginTop: '8%'}}
          renderItem={function ({item: products}): React.JSX.Element {
            return (
              <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                  locations={[0, 1]}
                  colors={['#023552', '#0477B8']}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}
                  style={styles.containerGradient2}>
                  
                 
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        /> */}

        <View>
          <LineChart data={data} />
        </View>
      </View>
    </ImageBackground>
  );
}
