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
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: '700',
  },
  // thanh tiêu đề
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
    fontSize: 16,
    lineHeight: 18.75,
    top: '1%',
    marginLeft: '5%',
    color: colors.white,
  },
  //items
  text: {
    position: 'absolute',
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.36,
    color: colors.white,
    left: '7%',
    top: '23%',
  },
  vertor: {
    position: 'absolute',
    top: '27%',
    right: '10%',
  },
});

export default styles;
