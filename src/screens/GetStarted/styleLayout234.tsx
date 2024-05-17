import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../components/color';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  imageBG: {
    width: width,
    height: height - 70,
    flex: 1,
  },
  text: {
    color: colors.white,
  },
  fontText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imgContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
    transform: [{rotate: ' 0.21 deg'}],
  },
  image: {
    // marginHorizontal: 'auto',
  },
  content: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 16.5,
    marginHorizontal: 20,
    textShadowOffset: {
      height: 1,
      width: 0,
    },
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowRadius: 4,
  },
  button: {
    height: 50,
    width: 200,
    marginHorizontal: 'auto',
    borderRadius: 23.5,
  },
  gradient: {
    justifyContent: 'center',
    borderRadius: 23.5,
    height: '100%',
    width: '100%',
  },
  continue: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },
});

export default styles;
