import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../components/color';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  // background
  imageBG: {
    flex: 1,
    width: '100%',
    height: '108%',
    bottom: '8%',
  },
  font: {
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: '700',
  },
  title: {
    borderColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: '3%',
    alignItems: 'center',
    height: '6%',
  },
  goback: {},
  texttitle: {
    fontSize: 20,
    lineHeight: 19,
    top: '1%',
    marginLeft: '5%',
    color: colors.white,
  },
  content: {
    flex: 1,
  },
  // text header
  textheader: {
    fontFamily: 'IBMPlexSans-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: 19,
    color: '#01FB91',
    marginVertical: '5%',
  },
  // dropdown
  icondrop: {
    width: 15,
    height: 10,
  },
  select: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // product
  gridView: {
    marginHorizontal: '3%',
    // marginTop: ,
    flex: 1,
  },
  // itemContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: 'blue',
  //   borderRadius: 8,
  //   width: 155,
  //   height: 100,
  // },
  name: {
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    color: 'rgba(255, 255, 255, 1)',
    marginTop: '4%',
  },
  imageproduct: {
    width: '100%',
    height: '100%',
  },
  gradientInput: {
    padding: '5%',
    marginTop: '5%',
    borderRadius: 20,
    width: '100%',
    height: '67%',
    shadowColor: 'rgba(42, 252, 255, 0.05)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  imgheader: {
    maxWidth: '100%',
    height: '45%',
    marginTop: '-0.8%',
  },
  monitor: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 18.75,
    color: 'rgba(255, 255, 255, 1)',
    marginRight: '20%',
  },
  textprices: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'rgba(255, 255, 255, 0.4)',
  },
  prices: {
    width: 345,
    height: 92,
    backgroundColor: 'rgba(0, 73, 115, 1)',
    borderRadius: 6,
    marginVertical: '3%',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ellipse1: {
    width: 52,
    height: 52,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  ellipse2: {
    width: 33.19,
    height: 33.19,
    backgroundColor: 'rgba(0, 194, 255, 1)',
    borderRadius: 50,
  },
  price: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.41,
    color: 'rgba(255, 255, 255, 1)',
    marginVertical: '3%',
  },
  font700: {
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: '700',
    color: colors.white,
  },
  font300: {
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
    color: colors.white,
  },
  //information
  containerInformation: {
    flex: 0.5,
    width: '95%',
    top: '-10%',
    alignSelf: 'center',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 4}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)s
  },
  label: {
    fontSize: 14,
    lineHeight: 21,
    marginBottom: '-5%',
    marginTop: '3%'
  },
  // text
  text: {
    fontSize: 10,
    lineHeight: 15,
    alignSelf: 'center',
  },
  textquote: {
    // borderBottomColor: 'rgba(255, 255, 255, 0.5)',
    // borderBottomWidth: 0.5,
    marginTop: '3%',
    justifyContent: 'center',
  },
});
export default styles;
