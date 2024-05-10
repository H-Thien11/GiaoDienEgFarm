import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import {images} from '../../assets/theme/images';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();
export default function News() {
  const [products, setProducts] = useState([
    {
      name: 'Hay When You Need It',
      description: `"Agriculture is the most healthful, most useful and most noble employment of man.`,
      author: 'George Washington',
      day: 'Thurday 09 2022',
      image: 'product1' as any,
    },
    {
      name: 'Hay When You Need It',
      description: `"Agriculture is the most healthful, most useful and most noble employment of man.`,
      author: 'George News',
      day: 'Thurday 09 2022',
      image: 'product2' as any,
    },
    {
      name: 'Hay When You Need It',
      description: `"Agriculture is the most healthful, most useful and most noble employment of man.`,
      author: 'News Washington',
      day: 'Thurday 09 2022',
      image: 'product3' as any,
    },
    {
      name: 'Strawberry Ginger',
      description: `"Agriculture is the most healthful, most useful and most noble employment of man.`,
      author: 'George Washington',
      day: 'Thurday 09 2022',
      image: 'product4' as any,
    },
  ]);
  const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/img/background.png')}
      style={styles.imageBG}>
      <View style={{flex: 1, top: '8%'}}>
        {/* title */}
        <View style={styles.title}>
          <Text style={[styles.texttitle, styles.font]}>News</Text>
          <View style={{flexDirection: 'row', marginLeft: '50%'}}>
            <TouchableOpacity activeOpacity={0.6}>
              <Image style={styles.imageiconheader} source={images.bookmark} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                style={styles.imageiconheader}
                source={images.iconscanseri}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
              <Image style={styles.imageiconheader} source={images.bell} />
            </TouchableOpacity>
          </View>
        </View>
        {/* list product */}
        <View>
          <FlatList
            data={products}
            renderItem={function ({item: products}): React.JSX.Element {
              return (
                <View style={{alignItems: 'center', marginTop: '10%'}}>
                  <LinearGradient
                    locations={[0, 1]}
                    colors={[
                      'rgba(255, 255, 255, 1)',
                      'rgba(119, 255, 210, 1)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.gradientInput}>
                      {/* image product */}
                    <View style={{width: '30%', height: '88%', marginLeft: '1.5%', position: 'absolute'}}>
                      <Image
                        source={images[products.image]}
                        style={[styles.imageproduct]}
                      />
                    </View>
                    <Text style={styles.name}>{products.name}</Text>
                  </LinearGradient>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
