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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 155,
    height: 100,
    shadowColor: 'rgba(42, 252, 255, 0.05)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
});
export default styles;
