import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';
import colors from '../../../components/color';

import LineChart from '../../../components/LineChart';

export default function Index() {
  const [ListItems, setData] = useState([
    {
      id: 1,
      img: 'tomato' as any,
      name: 'Tomato',
      // data: [10, 20, 5, 50, 25, 30, 45, 35, 47, 25],
      data: [10, 20, 0, 90, 23, 43, 85, 65, 90, 27],
      price: 19.5,
      percent: 0.13,
    },
    {
      id: 2,
      img: 'cucumber' as any,
      name: 'Cucumber',
      data: [
        40, 0, 38, 42, 46, 50, 36, 55, 27, 50, 50, 70, 0, 55, 40, 90, 60,
        99, 60, 60, 77,
      ],
      price: 17.25,
      percent: 16.31,
    },
    {
      id: 3,
      img: 'pepper' as any,
      name: 'Pepper Bell',
      data: [30, 95, 65, 88,54,40,90,0,20,10],
      price: 10.5,
      percent: -16.58,
    },
    {
      id: 4,
      img: 'eggplant' as any,
      name: 'Eggplant',
      data: [2,5,5,0,10,7,3,7,11,15,9,25,2,10,10,17,12,17,14,15,16,17,20,25,17],
      price: 14.0,
      percent: 120.0,
    },
  ]);

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
        <FlatList
          data={ListItems}
          renderItem={function ({item: ListItems}): React.JSX.Element {
            return (
              <TouchableOpacity activeOpacity={0.7}>
                <LinearGradient
                  locations={[0, 1]}
                  colors={['#023552', '#0477B8']}
                  start={{x: 0, y: 1}}
                  end={{x: 0, y: 0}}
                  style={styles.containerGradient2}>
                  <Image source={images[ListItems.img]} />
                  <Text style={[styles.font900, styles.name]}>
                    {ListItems.name}
                  </Text>
                  <LineChart
                    data={ListItems.data}
                    color={ListItems.id % 2 === 0 ? colors.green2 : colors.red}
                  />
                  <View style={{alignItems: 'flex-end'}}>
                    <Text style={[styles.font900, styles.price]}>
                      ${ListItems.price.toFixed(2)}
                    </Text>

                    <Text
                      style={[
                        styles.font500,
                        {
                          fontSize: 10,
                          lineHeight: 11.72,
                          color:
                            ListItems.percent < 0 ? colors.red : colors.green2,
                        },
                      ]}>
                      {ListItems.percent >= 0
                        ? `+${ListItems.percent.toFixed(2)}`
                        : ListItems.percent.toFixed(2)}
                      %
                    </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
}
