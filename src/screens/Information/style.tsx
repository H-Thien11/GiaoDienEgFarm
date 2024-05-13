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
  absolute: {
    position: 'absolute',
  },
  //Information
  textcontainer: {
    right: '20%',
    top: '35%',
  },
  textInformation: {
    fontFamily: 'Inter-Bold',
    color: colors.white,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20.57,
  },
  avatar: {
    bottom: '15%',
    left: '15%',
  },
  buttonpen: {
    right: '10%',
    bottom: '5%',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // setting
  containerSetting: {
    top: '18%',
    width: '85%',
    alignSelf: 'center',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    marginTop: '3%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 4}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  textSetting: {
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21.09,
    color: colors.white,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    marginHorizontal: '5%',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
  //button
  button: {
    height: 50,
    width: 277,
    borderRadius: 23.5,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    height: '100%',
    width: '100%',
  },
  resend: {
    fontSize: 20,
    lineHeight: 23,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'IBMPlexSans-Bold',
  },
});

export default styles;
