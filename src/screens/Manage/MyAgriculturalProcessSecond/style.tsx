import {StyleSheet} from 'react-native';
import colors from '../../../components/color';

const styles = StyleSheet.create({
  // background
  imageBG: {
    flex: 1,
    width: '100%',
    height: '108%',
    bottom: '8%',
  },
  font: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    color: colors.white,
  },
  font400: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: colors.white,
  },
  font500: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    color: colors.white,
  },

  font700: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    color: colors.white,
  },
  font900: {
    fontFamily: 'Roboto-Black',
    fontWeight: '900',
    color: colors.white,
  },
  // thanh tiêu đề
  title: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: '3%',
    alignItems: 'center',
    height: '6%',
  },
  goback: {},
  texttitle: {
    fontSize: 16,
    lineHeight: 19.36,
    top: '1%',
    marginLeft: '5%',
  },
  //containerGradient1
  containerGradient1: {
    width: '85%',
    alignSelf: 'center',
    marginVertical: '8%',
    height: '20%',
    borderRadius: 12,
    shadowColor: 'rgba(rgba(0, 0, 0, 0.08)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 2}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  text01: {
    fontSize: 20,
    lineHeight: 23.44,
    left: '10%',
    marginVertical: '5%',
  },
  text02: {
    left: '10%',
    fontSize: 10,
    lineHeight: 11.72,
    marginBottom: '1%',
  },
  text03: {
    fontSize: 28,
    lineHeight: 32.81,
  },
  text04: {
    marginLeft: '15%',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'rgba(255, 255, 255, 0.68)',
  },
  text05: {
    fontSize: 10,
    lineHeight: 11.72,
    left: '10%',
    marginTop: '1%',
  },
  //Market price
  textlabel: {fontSize: 20, lineHeight: 20, marginLeft: '7.5%', marginBottom: '1%'},
  containerGradient2: {
    width: '85%',
    height: 80,
    alignSelf: 'center',
    marginVertical: '2%',
    borderRadius: 8,
    shadowColor: 'rgba(173, 173, 173, 0.08)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 2}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    lineHeight: 18.75,
    bottom: '2%',
    right: '10%',
  },
  price: {
    fontSize: 16,
    lineHeight: 18.75,
    bottom: '2%',
    right: '10%',
  },
});
export default styles;
