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
    borderColor: 'rgba(255,255,255,0.5)',
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
    fontFamily: 'Roboto-Black',
    fontWeight: '900'
  },
  confirm: {
    fontSize: 20,
    lineHeight: 19,
    color: colors.green,
    marginVertical: '8%',
  },
  // Confirm
  containerConfirm: {
    padding: '10%',
    paddingTop: '-5%',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    width: '90%',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 4}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  label: {
    paddingVertical: '5%',
    color: colors.white,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 21,
    paddingBottom: '2%',
  },
  input: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    padding: 0,
    fontSize: 10,
    lineHeight: 15,
    color: colors.white,
    fontWeight: '300',
    fontFamily: 'Poppins-Light',
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
    color: 'black',
  },
});

export default styles;
