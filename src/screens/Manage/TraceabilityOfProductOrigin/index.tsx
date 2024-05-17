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

export default function Index() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Product 1', value: 'product1'},
    {label: 'Product 2', value: 'product2'},
    {label: 'Product 3', value: 'product3'},
    {label: 'Product 4', value: 'product4'},
    {label: 'Product 5', value: 'product5'},
  ]);

  const [products, setProducts] = useState([
    {name: 'Incubate raw materials', image: 'mushroom' as any},
    {name: 'Mushroom', image: 'mushroom' as any},
    {name: 'Check information', image: 'mushroom' as any},
    {name: 'Fluff silk', image: 'mushroom' as any},
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
            Traceability of product origin
          </Text>
        </View>
        {/* secsion */}
        <View style={{flex: 1}}>
          {/* text */}
          <View style={{alignItems: 'center'}}>
            <Text style={styles.textheader}>
              Which product do you want to retrieve?
            </Text>
          </View>
          {/* select dropdown */}
          <View style={styles.select}>
            {/* select */}
            <Image source={images.backgroundproduct} />
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              zIndex={1000}
              containerStyle={{
                position: 'absolute',
                width: '85%',
              }}
              style={{marginBottom: '3%', width: '90%', marginLeft: '4%'}}
              placeholder="Product etrieval"
              placeholderStyle={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '400',
                fontFamily: 'IBMPlexSans-Regular',
                fontSize: 16,
                lineHeight: 19,
              }}
              ArrowDownIconComponent={({style}) => (
                <Image style={styles.icondrop} source={images.downicon} />
              )}
              ArrowUpIconComponent={({style}) => (
                <Image style={styles.icondrop} source={images.upicon} />
              )}
              dropDownContainerStyle={{
                zIndex: 1000,
                elevation: 5000,
              }}
              theme="GRADIENT"
            />
          </View>
          {/* body*/}
          <FlatGrid
            itemDimension={120}
            data={products}
            style={styles.gridView}
            // staticDimension={100}
            // fixed
            // horizontal
            spacing={20}
            renderItem={function ({item: products}): React.JSX.Element {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('IncubateRawMaterialsFist')
                  }
                  activeOpacity={0.7}
                  >
                  <LinearGradient
                    locations={[0, 1]}
                    colors={['rgba(4, 119, 184, 1)', 'rgba(2, 53, 82, 1)']}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}
                    style={styles.gradientInput}>
                    <View style={{width: 27, height: 40}}>
                      <Image
                        source={images[products.image]}
                        style={[styles.imageproduct]}
                      />
                    </View>
                    <Text style={styles.name}>{products.name}</Text>
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
