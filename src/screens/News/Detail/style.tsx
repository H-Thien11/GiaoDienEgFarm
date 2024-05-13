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
  font700: {
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: '700',
    color: colors.white,
  },
  font300: {
    fontFamily: 'Poppins-Light',
    fontWeight: '300',
    color: colors.white,
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
    fontSize: 19,
    lineHeight: 19,
  },
  // product
  framedetail: {
    width: '78%',
    height: '50%',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderBottomEndRadius: 9,
    borderBottomStartRadius: 9,
  },
  header: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.23,
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: '10%',
    flex: 1,
  },
  icon: {
    flexDirection: 'row',
    marginLeft: '20%',
  },
  secsioncontent: {
    marginLeft: '10%',
    marginRight: '9%',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 11.72,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  contentsecond: {
    marginTop: '10%',
  },
});

export default styles;
