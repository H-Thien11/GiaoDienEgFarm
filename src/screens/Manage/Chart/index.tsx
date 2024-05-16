import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '../../../assets/theme/images';
import colors from '../../../components/color';
import Icons from 'react-native-vector-icons/FontAwesome6';
import {LineChart} from 'react-native-gifted-charts';
import LinearGradient from 'react-native-linear-gradient';
import {Stop} from 'react-native-svg';

export default function Index() {
  const lineData = [
    {value: 24, label: 'Jan'},
    {value: 25, label: 'Feb'},
    {value: 25.5, label: 'Mar'},
    {value: 26.5, label: 'Apr'},
    {value: 25, label: 'May'},
    {value: 28, label: 'Jun'},
  ];

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
          <Image source={images.cucumber} />
          <Text style={[styles.texttitle, styles.font]}>Cucumber</Text>
          <Icons
            style={{alignSelf: 'flex-end'}}
            name={'star'}
            color={'white'}
            size={20}
            light></Icons>

          <View style={styles.buttonExchange}>
            <Image source={images.iconExchange} />
            <Text style={[styles.font900, styles.textExchange]}>Exchange</Text>
          </View>
        </View>
        {/* chart */}
        <View style={styles.containerChart}>
          <Text style={[styles.font900, styles.titleChart]}>Chart Header</Text>
          <LineChart
            data={lineData}
            yAxisOffset={23}
            width={320}
            height={200}
            dataPointsColor={'#00FB91'}
            lineGradient={true}
            lineGradientStartColor="#296934"
            lineGradientEndColor="#51CF67"
            hideXAxis={false}
            hideYAxis={false}
            hideGrid={false}
          />
        </View>

        {/* button */}
        <View style={styles.containerButton}>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonTime}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#FFFFFF', '#004973']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.containerButonSelected}>
              <Text
                style={[styles.font900, styles.textTime, styles.textSelected]}>
                1 H
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTime}>
            <Text style={[styles.font900, styles.textTime]}>24 H</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTime}>
            <Text style={[styles.font900, styles.textTime]}>1 W</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTime}>
            <Text style={[styles.font900, styles.textTime]}>1 M</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTime}>
            <Text style={[styles.font900, styles.textTime]}>6 M</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTime}>
            <Text style={[styles.font900, styles.textTime]}>1 Y</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.buttonTime}>
            <Text style={[styles.font900, styles.textTime]}>All</Text>
          </TouchableOpacity>
        </View>
        {/* content */}
        <View style={styles.container}>
          <LinearGradient
            locations={[0, 1]}
            colors={['#02FFAC', '#00FFFF']}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            style={styles.containerGradient}>
            {/* text */}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={images.cucumber} />
              <Text style={[styles.name]}>Cucumber</Text>
            </View>
            {/* price */}
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={[
                  styles.font900,
                  styles.name,
                  {fontSize: 12, lineHeight: 14.06, color: '#000'},
                ]}>
                $ 24.00 - 27.00
              </Text>
              <Text
                style={[
                  styles.font500,
                  {fontSize: 10, lineHeight: 11.72, color: colors.gray},
                ]}>
                00.00%
              </Text>
            </View>
          </LinearGradient>
        </View>
        {/* time */}
        <View style={styles.time}>
          <View style={styles.containerTextTime}>
            <Text style={[styles.font400]}>Time</Text>
            <Text style={[styles.font400]}>Ago 08, 2021 | 09:26:08 AM</Text>
          </View>
          <Icons
            style={{
              backgroundColor: colors.white,
              width: 16,
              height: 16,
              borderRadius: 50,
            }}
            color={'#51CF66'}
            size={16}
            name="circle-arrow-up"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
