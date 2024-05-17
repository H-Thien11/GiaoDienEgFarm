import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import {images} from '../../../assets/theme/images';
import colors from '../../../components/color';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
export default function Manage() {
  const [products, setProducts] = useState([
    {
      name: 'Hay When You Need It',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis cum consequat consequat duis urna egestas quis purus sit. Pellentesque vel condimentum enim eu. Cursus diam egestas maecenas vitae velit lectus. Pulvinar lorem nunc pharetra, mauris, scelerisque. Bibendum at congue mattis risus odio. Nibh orci vitae duis sed. Ipsum et risus aliquam a aliquam vestibulum justo ipsum in. Nulla.`,
      author: 'George Washington',
      day: 'Thurday 09 2022',
      image: 'product1' as any,
      saved: 'bookmarksolid',
    },
  ]);
  const navigation = useNavigation() as any;
  const [iconColor, setIconColor] = useState(true);
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={{flex: 1, top: '8%'}}>
        {/* title */}
        <View style={styles.title}>
          <Text style={[styles.texttitle, styles.font700]}>News</Text>
          <TouchableOpacity
            style={{marginLeft: '50%'}}
            onPress={() => navigation.navigate('Saved')}
            activeOpacity={0.6}>
            <Image style={{marginLeft: '60%'}} source={images.bookmarksolid} />
          </TouchableOpacity>
          <Image source={images.bell} />
        </View>
        {/* product */}
        <View style={{alignItems: 'center'}}>
          <View style={{width: '80%', height: '31%', marginTop: '10%'}}>
            <Image
              style={{width: '100%', height: '100%', top: '2%'}}
              source={images.product42}
            />
          </View>
          {products.map((product, index) => (
            <View key={index} style={styles.framedetail}>
              <View style={styles.header}>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.icon}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      setIconColor(!iconColor);
                    }}>
                    {iconColor ? (
                      <Icon
                        name="bookmark"
                        size={15}
                        color={'rgba(0, 0, 0, 1)'}
                        solid
                      />
                    ) : (
                      <Icon
                        name="bookmark"
                        size={15}
                        color={'rgba(2, 255, 172, 1)'}
                        solid
                      />
                    )}
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    style={{marginLeft: '15%'}}>
                    <Icon
                      name="share"
                      size={15}
                      color={'rgba(0, 0, 0, 1)'}
                      solid
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text style={styles.secsioncontent}>{product.description}</Text>
                <Text style={[styles.contentsecond, styles.secsioncontent]}>
                  {product.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}
