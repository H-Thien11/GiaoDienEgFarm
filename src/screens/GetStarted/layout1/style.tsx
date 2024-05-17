import {StyleSheet} from 'react-native';
import colors from '../../../components/color';

const styles = StyleSheet.create({
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
  imageContainer: {
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
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    textAlign: 'center',
  },
  BlockchainFarm: {
    fontFamily: 'SonsieOne-Regular',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 24,
    marginTop: 10,
  },
  image: {
    marginHorizontal: 'auto',
  },
  content: {
    fontSize: 25,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'left',
    marginHorizontal: 20,
    textShadowOffset: {
      height: 2.5,
      width: 0,
    },
    textShadowColor: 'rgba(255, 255, 255, 0.5)',
    textShadowRadius: 10,
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
