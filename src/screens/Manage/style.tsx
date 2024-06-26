import {StyleSheet} from 'react-native';
import colors from '../../components/color';

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
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '6%',
    alignItems: 'center',
    height: '6%',
    width: '101%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: 'rgba(0, 0, 0, 0.05)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 4}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  texttitle: {
    fontSize: 20,
    lineHeight: 19,
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
