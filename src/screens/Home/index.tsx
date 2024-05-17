import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '../../assets/theme/images';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={{flex: 1}}>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image style={styles.imageUserBG} source={images.userBackGround} />
          <Image style={styles.imageUser} source={images.user} />

          <View style={styles.textContainer}>
            <Text style={styles.textName}>Name</Text>
            <Text style={styles.textfirst}>Production Staff</Text>
            <Text style={[styles.textfirst, styles.textsecond]}>
              What do you want to do today?
            </Text>
          </View>
        </View>

        {/* choice */}
        <View style={styles.containerRectangle}>
          {/* item 1 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('AddProductionLog')}
            activeOpacity={0.7}
            style={styles.rectangle}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.backGroundRectangle}></Image>
              <Text style={styles.textRectangle}>Add production log</Text>
              <Image style={styles.vector} source={images.vector}></Image>
              <Image style={styles.image} source={images.imgHome1}></Image>
            </View>
          </TouchableOpacity>

          {/* item 2 */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ActivateStampsFirst')}
            activeOpacity={0.7}
            style={styles.rectangle}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.backGroundRectangle}></Image>
              <Text style={styles.textRectangle}>Activate Stamps</Text>
              <Image style={styles.vector} source={images.vector}></Image>
              <Image style={styles.image} source={images.imgHome2}></Image>
            </View>
          </TouchableOpacity>

          {/* item 3 */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Home', {
                screen: 'PileOfPillows',
              })
            }
            activeOpacity={0.7}
            style={styles.rectangle}>
            <View style={{alignItems: 'center'}}>
              <Image source={images.backGroundRectangle}></Image>
              <Text style={styles.textRectangle}>Pile of pillows</Text>
              <Image style={styles.vector} source={images.vector}></Image>
              <Image style={styles.image} source={images.imgHome3}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
