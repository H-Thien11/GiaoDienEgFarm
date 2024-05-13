import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import styles from './style';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from '../../assets/theme/images';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();
export default function Information() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={{top: '18%'}}>
        <Image
          style={{alignSelf: 'center'}}
          source={images.backGroundInformation}
        />
        <View style={[styles.absolute, styles.textcontainer]}>
          <Text style={styles.textInformation}>Andrea Cebreros</Text>
          <Text
            style={[styles.textInformation, {fontSize: 14, lineHeight: 16.94}]}>
            a.cebreros@myl.com
          </Text>
        </View>
        <Image
          style={[styles.absolute, styles.avatar]}
          source={images.AndreaCebreros}
        />
        {/* button penline */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.absolute, styles.buttonpen]}>
          <Image source={images.penline} />
        </TouchableOpacity>
      </View>
      {/* setting */}
      <View style={styles.containerSetting}>
        {/* item 1 */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.item]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.clockrotateright} />
            <Text style={styles.textSetting}>History</Text>
          </View>
          <Image style={{top: 5, right: 10}} source={images.angleright} />
        </TouchableOpacity>
        {/* item 2 */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.item]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.landmark} />
            <Text style={styles.textSetting}>USDA Prices</Text>
          </View>
          <Image style={{top: 5, right: 10}} source={images.angleright} />
        </TouchableOpacity>
        {/* item 3 */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.item]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.belloutline} />
            <Text style={styles.textSetting}>Notifications</Text>
          </View>
          <Image style={{top: 5, right: 10}} source={images.angleright} />
        </TouchableOpacity>
        {/* item 4 */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.item]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.shieldquartered} />
            <Text style={styles.textSetting}>Security</Text>
          </View>
          <Image style={{top: 5, right: 10}} source={images.angleright} />
        </TouchableOpacity>
        {/* item 5 */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.item]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.circlequestion} />
            <Text style={styles.textSetting}>Help and Support</Text>
          </View>
          <Image style={{top: 5, right: 10}} source={images.angleright} />
        </TouchableOpacity>
        {/* item 6 */}
        <TouchableOpacity activeOpacity={0.7} style={[styles.item]}>
          <View style={{flexDirection: 'row'}}>
            <Image source={images.memoxmark} />
            <Text style={styles.textSetting}>Terms and Conditions</Text>
          </View>
          <Image style={{top: 5, right: 10}} source={images.angleright} />
        </TouchableOpacity>
      </View>
      {/* button */}
      <View style={{top: '20%', alignItems: 'center'}}>
        <TouchableOpacity
        
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            locations={[0, 1]}
            colors={['#FB0000', '#FBFF2A']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.gradient}>
            <Text style={styles.resend}>Log out</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
