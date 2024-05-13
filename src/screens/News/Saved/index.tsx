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
import {images} from '../../../assets/theme/images';
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
      saved: 'bookmarksolid',
    },
  ]);
  const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../../assets/img/background.png')}
      style={styles.imageBG}>
      <View style={{flex: 1, top: '8%'}}>
        {/* title */}
        <View style={styles.title}>
          <Text style={[styles.texttitle, styles.font]}>Saved</Text>
          <View style={{flexDirection: 'row', marginLeft: '50%'}}>
            <TouchableOpacity activeOpacity={0.6}>
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
            style={{marginTop: '8%'}}
            renderItem={function ({item: products}): React.JSX.Element {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={{alignItems: 'center', marginTop: '3%'}}>
                  <LinearGradient
                    locations={[0, 1]}
                    colors={[
                      'rgba(255, 255, 255, 1)',
                      'rgba(119, 255, 210, 1)',
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.gradientInput}>
                    <View style={styles.secsioncontent}>
                      {/* image product */}
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.viewimage}>
                        <Image
                          source={images[products.image]}
                          style={[styles.imageproduct]}
                        />
                      </TouchableOpacity>
                      {/* secsion content */}
                      <View style={styles.viewcontent}>
                        <View style={{flexDirection: 'row'}}>
                          {/* name product */}
                          <Text style={styles.name}>{products.name}</Text>
                          {/* button saved */}
                          <TouchableOpacity
                            activeOpacity={0.3}
                            style={{
                              position: 'absolute',
                              left: '90%',
                              width: 11,
                              height: 12,
                            }}>
                            <Image
                              style={{width: '100%', height: '100%'}}
                              source={images[products.saved]}
                            />
                          </TouchableOpacity>
                        </View>
                        {/* description */}
                        <Text style={styles.description}>
                          {products.description}
                        </Text>
                        {/* author and day */}
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '90%',
                            alignItems: 'center',
                            marginTop: '3%',
                          }}>
                          <Text style={[styles.secsionbottom, styles.author]}>
                            {products.author}
                          </Text>
                          <Text style={[styles.secsionbottom]}>
                            {products.day}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
