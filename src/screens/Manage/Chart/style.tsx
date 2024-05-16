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
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    color: colors.white,
  },
  font400: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: colors.white,
  },
  font500: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    color: colors.white,
  },

  font700: {
    fontFamily: 'Roboto-Regular',
    fontWeight: '700',
    color: colors.white,
  },
  font900: {
    fontFamily: 'Roboto-Black',
    fontWeight: '900',
    color: colors.white,
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
  goback: {
    height: '100%',
    justifyContent: 'center',
    width: '3%',
  },
  texttitle: {
    fontSize: 16,
    lineHeight: 19.36,
    top: '1%',
    marginHorizontal: '2%',
  },
  buttonExchange: {
    backgroundColor: colors.white2,
    flexDirection: 'row',
    borderRadius: 48,
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginLeft: '30%',
  },
  textExchange: {
    fontSize: 10,
    lineHeight: 11.72,
    color: colors.green3,
    marginLeft: '5%',
  },
  //chart
  containerChart: {
    height: '40%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: colors.white3,
    alignSelf: 'center',
    marginTop: '3%',
    shadowColor: 'rgba(0, 0, 0, 0.25)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 4}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleChart: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#171725',
    marginTop: '5%',
    marginLeft: '5%',
    alignSelf: 'flex-start'
  },
  // button time
  containerButton: {
    flexDirection: 'row',
    width: '95%',
    height: '7%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '3%',
  },
  buttonTime: {
    borderWidth: 0.5,
    backgroundColor: colors.white4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '13%',
    height: '60%',
    borderColor: '#DFE2E4',
    shadowColor: 'rgba(255, 255, 255, 0.25)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 2}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  textTime: {
    fontSize: 12,
    lineHeight: 14.06,
    color: colors.gray,
  },
  containerButonSelected: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00FFFF',
    borderWidth: 0.5,
    borderRadius: 20,
    shadowColor: '#00FFFF', // Màu đổ bóng
    shadowOffset: {width: 0, height: 2}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  textSelected: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 14.06,
  },
  //container
  container: {
    alignItems: 'center',
  },
  containerGradient: {
    width: '95%',
    height: '25%',
    borderRadius: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '8%',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 16,
    lineHeight: 18.75,
  },
  // time
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    marginLeft: '5%'
  },
  containerTextTime: {},
});
export default styles;
