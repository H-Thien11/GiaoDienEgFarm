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
  //image
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    top: '3%',
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
  //input
  containerInput: {
    flex: 1,
    alignItems: 'flex-start',
    bottom: '10%',
    marginLeft: '10%'
  },
  lable: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: colors.white,
    marginVertical: '2%',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    width: '90%',
    paddingLeft: 15,
    borderRadius: 10,
  },
});
export default styles;
