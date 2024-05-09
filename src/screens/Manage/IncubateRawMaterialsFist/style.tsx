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
  // text first
  textfirst: {
    fontFamily: 'IBMPlexSans-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: 19,
    color: '#01FB91',
    marginTop: '7%',
    marginLeft: 36,

  },
  // input first
  textlable: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: '1.5%',
  },
  labelfirts: {
    marginRight: '62%',
  },
  labelthird: {
    marginRight: '70%',
  },
  inputcontent: {
    width: '100%',
    alignItems: 'center',
    marginTop: '8%',
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
    width: '85%',
    paddingLeft: '3%',
    borderRadius: 10,
  },
  map: {
    flex: 1,
    position: 'absolute',
    left: '84%',
    top: '45%',
    width: '6%',
    height: '40%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //    input second
  inputsecond: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    width: '85%',
    padding: '3%',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  labelsecond: {
    marginRight: '73%',
  },
  inputcontentsecond: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: '8%',
  },
  inputthird: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    width: '100%',
    padding: '3%',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  //   addphoto
  add: {
    alignItems: 'center',
    color: 'rgba(209, 209, 209, 1)',
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: '30%',
  },
  addphoto: {
    // backgroundColor: 'blue',
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
  },
  noteadd: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    marginTop: '2%',
    fontSize: 8,
    lineHeight: 10.5,
    color: 'rgba(209, 209, 209, 1)',
  },
  //button
  containerButon: {
    alignItems: 'center',
    marginTop: '7%',
  },
  button: {
    height: 50,
    width: 277,
    marginHorizontal: 'auto',
    borderRadius: 23.5,
  },
  buttoncancel: {
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    height: '100%',
    width: '100%',
  },
  completed: {
    fontSize: 20,
    lineHeight: 23,
    color: 'black',
  },
  cancel: {
    fontSize: 20,
    lineHeight: 23,
    color: 'rgba(255, 255, 255, 1)',
  },
  //
});
export default styles;
