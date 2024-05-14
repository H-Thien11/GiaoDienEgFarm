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
  textfirst: {
    fontFamily: 'IBMPlexSans-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: 19,
    color: '#01FB91',
    marginVertical: '2%',
  },
  day: {
    fontFamily: 'Lato-Black',
    fontWeight: '800',
    fontSize: 14,
    lineHeight: 17.5,
    color: 'rgba(255, 255, 255, 1)',
  },
  celsius: {
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    fontSize: 64,
    lineHeight: 80,
    color: 'rgba(255, 255, 255, 1)',
  },
  forecast: {
    top: '10%',
    marginRight: '53%',
    fontFamily: 'Lato-Bold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.5,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  customcelsius: {
    width: '12.5%',
    height: '16.5%',
    borderWidth: 3,
    borderRadius: 50,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  lastupdate: {
    fontFamily: 'Lato-Bold',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12.5,
    color: 'rgba(255, 255, 255, 0.5)',
    top: '-30%',
  },
  framesun: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: '-5%',
  },
  customtext: {
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17.5,
    color: 'rgba(255, 255, 255, 1)',
  },
  customcel: {
    width: '7.3%',
    height: '28.5%',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  customtextday: {
    fontFamily: 'Lato-Bold',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.6,
    marginTop: '20%',
    color: 'rgba(255, 255, 255, 1)',
  },
  textfooterfist: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 9,
    lineHeight: 10.55,
    color: 'rgba(255, 255, 255, 1)',
    marginRight: '20%',
  },
  textfootersecond: {
    fontFamily: 'Lato-Bold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.5,
    color: 'rgba(255, 255, 255, 1)',
  },
});
export default styles;
