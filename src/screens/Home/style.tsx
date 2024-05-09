import {StyleSheet} from 'react-native';
import colors from '../../components/color';

const styles = StyleSheet.create({
  // background
  imageBG: {
    flex: 1,
    width: '100%',
    height: '108%',
    bottom: '8%',
  },
  //image
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    top: '16.5%',
  },
  imageUserBG: {
    width: '100%',
    height: '60%',
  },
  imageUser: {
    top: '17%',
    height: '27%',
    width: '28%',
    position: 'absolute',
  },
  // text
  textContainer: {
    width: '50%',
    alignItems: 'center',
  },
  textName: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 24,
    fontSize: 16,
    color: colors.white,
  },
  textfirst: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 15,
    fontSize: 10,
    color: colors.green,
    marginTop: '1%',
    marginBottom: '4%',
  },
  textsecond: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  //Rectangle
  containerRectangle: {
    flex: 1,
    alignItems: 'center',
    top: '8%',

  },
  rectangle: {
    marginVertical: '3.5%',
    width: '85%'
  },
  textRectangle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: '500',
    position: 'absolute',
    color: colors.white,
    left: '10%',
    top: '10%',
  },
  vector: {
    position: 'absolute',
    left: '12.5%',
    top: '50%'
  },
  image: {
    position: 'absolute',
    bottom: '15%',
    right: '7.5%',
  },
});

export default styles;
