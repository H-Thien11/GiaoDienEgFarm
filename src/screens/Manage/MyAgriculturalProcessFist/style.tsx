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
  texttitle: {
    fontSize: 20,
    lineHeight: 19,
    top: '1%',
    marginLeft: '5%',
    color: colors.white,
  },
  createicon: {
    marginLeft: '30%',
    marginTop: '1%',
  },
  // textcontent
  textcontent: {
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.73,
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    marginVertical: '6.5%'
  },
  //button
  containerButon: {
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 277,
    marginHorizontal: 'auto',
    borderRadius: 23.5,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    height: '100%',
    width: '100%',
  },
  createmore: {
    fontSize: 20,
    lineHeight: 23,
    color: 'black',
  },
});
export default styles;
