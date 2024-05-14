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
import {FlatGrid} from 'react-native-super-grid';
import { rotationHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const navigation = useNavigation() as any;
  const input = useRef<OTPTextView>(null);
  const [weather, setWeather] = useState(false)
  const [date, setDate] = useState([
    {date: 'SAT', weather: 'sunny'},
    {date: 'SUN', weather: 'sunny'},
    {date: 'MON', weather: 'cloudy'},
    {date: 'TUE', weather: 'clouds'},
    {date: 'WED', weather: 'rainy'},
    {date: 'THU', weather: 'clouds'},
    {date: 'FRI', weather: 'cloudy'},
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
          {/* text */}
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textfirst}>Suitable for planting trees:</Text>
          </View>
          {/* weather */}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setWeather(!weather);
            }}>
            {weather ? (
              <LinearGradient
                locations={[0.3, 0.8, 1]}
                colors={[
                  'rgba(69, 255, 38, 1)',
                  'rgba(5, 192, 13, 1)',
                  'rgba(35, 255, 70, 1)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradientInput}>
                <View>
                  <View>
                    <View>
                      <Text style={styles.day}>Friday</Text>
                      <View style={{flexDirection: 'row', bottom: '3%'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.celsius}>26</Text>
                          <Text style={[styles.customcelsius]} />
                        </View>
                        {/* weather */}
                        <View style={styles.framesun}>
                          <Text style={styles.forecast}>Sunny</Text>
                          <Image source={images.sun} />
                        </View>
                      </View>
                      <Text style={styles.lastupdate}>Last updated 11:45</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        {/* High */}
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.customtext}>High {'\t'} 30</Text>
                          <Text style={styles.customcel} />
                        </View>
                        {/* Low */}
                        <View style={{flexDirection: 'row', marginTop: '2%'}}>
                          <Text style={styles.customtext}>Low {'\t'} 20</Text>
                          <Text style={styles.customcel} />
                        </View>
                      </View>
                      {/* humidity */}
                      <View
                        style={{flex: 1, marginLeft: '45%', marginTop: '-7%'}}>
                        <Image source={images.humidity} />
                      </View>
                    </View>
                    {/* next date */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      {date.map((date, index) => (
                        <View key={index} style={{marginVertical: '3%'}}>
                          {/* date */}
                          <Text style={styles.customtextday}>{date.date}</Text>
                          <View style={{marginTop: '80%'}}>
                            <Image source={images[date.weather]} />
                          </View>
                        </View>
                      ))}
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginRight: '10%',
                        marginTop: '-2%',
                      }}>
                      <View>
                        <Text style={styles.textfooterfist}>USA,New York</Text>
                      </View>
                      <View>
                        <Text style={styles.textfootersecond}>
                          Wind Speed 28 km/h
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginRight: '50%',
                        marginTop: '3%',
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={{width: 14.9, height: 15.35, marginTop: '8%'}}>
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={images.location}
                        />
                      </TouchableOpacity>
                      <View style={{marginLeft: '70%'}}>
                        <Image source={images.wind} />
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            ) : (
              <LinearGradient
                locations={[0.3, 0.8, 1]}
                colors={[
                  'rgba(255, 155, 38, 1)',
                  'rgba(192, 39, 5, 1)',
                  'rgba(255, 35, 35, 1)',
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.gradientInput}>
                <View>
                  <View>
                    <View>
                      <Text style={styles.day}>Friday</Text>
                      <View style={{flexDirection: 'row', bottom: '3%'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.celsius}>26</Text>
                          <Text style={[styles.customcelsius]} />
                        </View>
                        {/* weather */}
                        <View style={styles.framesun}>
                          <Text style={styles.forecast}>Sunny</Text>
                          <Image source={images.sun} />
                        </View>
                      </View>
                      <Text style={styles.lastupdate}>Last updated 11:45</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        {/* High */}
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.customtext}>High {'\t'} 30</Text>
                          <Text style={styles.customcel} />
                        </View>
                        {/* Low */}
                        <View style={{flexDirection: 'row', marginTop: '2%'}}>
                          <Text style={styles.customtext}>Low {'\t'} 20</Text>
                          <Text style={styles.customcel} />
                        </View>
                      </View>
                      {/* humidity */}
                      <View
                        style={{flex: 1, marginLeft: '45%', marginTop: '-7%'}}>
                        <Image source={images.humidity} />
                      </View>
                    </View>
                    {/* next date */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      {date.map((date, index) => (
                        <View key={index} style={{marginVertical: '3%'}}>
                          {/* date */}
                          <Text style={styles.customtextday}>{date.date}</Text>
                          <View style={{marginTop: '80%'}}>
                            <Image source={images[date.weather]} />
                          </View>
                        </View>
                      ))}
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginRight: '10%',
                        marginTop: '-2%',
                      }}>
                      <View>
                        <Text style={styles.textfooterfist}>USA,New York</Text>
                      </View>
                      <View>
                        <Text style={styles.textfootersecond}>
                          Wind Speed 28 km/h
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginRight: '50%',
                        marginTop: '3%',
                      }}>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        style={{width: 14.9, height: 15.35, marginTop: '8%'}}>
                        <Image
                          style={{width: '100%', height: '100%'}}
                          source={images.location}
                        />
                      </TouchableOpacity>
                      <View style={{marginLeft: '70%'}}>
                        <Image source={images.wind} />
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
