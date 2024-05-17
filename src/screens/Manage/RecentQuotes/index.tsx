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
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../components/color';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const navigation = useNavigation() as any;
  const input = useRef<OTPTextView>(null);
  const [weather, setWeather] = useState(false);
  const [data, setData] = useState([
    {
      name: 'Last Closing up.',
      date: 'Ago 08, 2021',
      time: '09:26:08 AM',
      arrows: 'up',
    },
    {
      name: 'September Futures down.',
      date: 'Sep 01, 2021',
      time: '09:25:05 AM',
      arrows: 'down',
    },
    {
      name: 'October Futures down.',
      date: 'Oct 01, 2021',
      time: '09:25:05 AM',
      arrows: 'down',
    },
  ]);
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
        </View>
        {/* secsion */}
        <View style={{flex: 1}}>
          {/* image */}
          <View style={styles.imgheader}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={images.tomatothird}
            />
          </View>
          {/* monitor */}
          <View
            style={{
              borderBottomWidth: 0.5,
              width: '100%',
              borderBottomColor: 'rgba(238, 236, 242, 1)',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: '3%',
                marginHorizontal: '5%',
              }}>
              {/* image arrows */}
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: 'rgba(245, 245, 245, 1)',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="arrows-alt"
                  color={'rgba(52, 58, 64, 1)'}
                  size={20}
                />
              </View>
              {/* text and note */}
              <View style={{marginRight: '55%'}}>
                <Text style={[styles.monitor]}>Monitor</Text>
                <Text style={styles.textprices}>Corn Prices</Text>
              </View>
              <Icon color={'rgba(255, 255, 255, 1)'} name="ellipsis-v" />
            </View>
          </View>
          {/* prices */}
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.prices}>
              <View style={styles.ellipse1}>
                <View style={styles.ellipse2} />
              </View>
              {/* number price */}
              <View style={{marginLeft: '7%'}}>
                <Text style={styles.price}>$ 6,388.00</Text>
                <Text style={styles.price}>+0.13%</Text>
              </View>
            </View>
          </View>
        </View>
        {/* recent quote */}
        {/* information */}
        <View style={styles.containerInformation}>
          <Text style={[styles.font700, styles.label]}>Recent Quotes</Text>
            <FlatList
              data={data}
              style={{marginTop: '7%'}}
              renderItem={function ({item: data}): React.JSX.Element {
                const iconName =
                  data.arrows === 'up'
                    ? 'circle-arrow-up'
                    : 'circle-arrow-down';
                const iconColor =
                  data.arrows === 'up'
                    ? 'rgba(81, 207, 102, 1)'
                    : 'rgba(212, 81, 81, 1)';
                return (
                  <View
                    style={{
                      marginTop: '3%',
                      borderTopColor: 'rgba(255, 255, 255, 0.5)',
                      borderTopWidth: 0.5,
                    }}>
                    <View style={styles.textquote}>

                      


                      <Text style={styles.textname}>{data.name}</Text>
                      <Text style={styles.textdatetime}>

                        {data.date} | {data.time}
                      </Text>
                    </View>

                    <Icons
                      style={{
                        backgroundColor: colors.white,
                        width: 16,
                        height: 16,
                        borderRadius: 50,
                        position: 'absolute',
                        right: 0,
                        top: '30%',
                      }}
                      color={iconColor}
                      size={16}
                      name={iconName}
                    />
                  </View>
                );
              }}
            />
        </View>
      </View>
    </ImageBackground>
  );
}
