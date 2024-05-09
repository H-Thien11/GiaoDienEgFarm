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
    fontSize: 20,
    lineHeight: 19,
    top: '1%',
    marginLeft: '5%',
    color: colors.white,
  },
  //input
  containerInput: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: '10%',
    marginTop: '10%',
  },
  lable: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: colors.white,
    marginTop: '5%',
    marginBottom: '2%',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 15,
    color: 'rgba(255, 255, 255, 0.4)',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    width: '90%',
    paddingLeft: 15,
    borderRadius: 10,
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
    marginTop: '-120%'
  },
  textbutton: {
    fontSize: 20,
    lineHeight: 23,
    color: 'black',
  },
});
export default styles;
