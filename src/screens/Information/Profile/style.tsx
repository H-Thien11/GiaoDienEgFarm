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
    fontSize: 20,
    lineHeight: 19,
  },
  //image
  containerImg: {
    alignItems: 'center',
    marginVertical: '5%',
  },
  //information
  containerInformation: {
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
  label: {
    fontSize: 14,
    lineHeight: 21,
  },
  textInput: {
    padding: 0,
    fontSize: 10,
    lineHeight: 15,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    borderBottomWidth: 0.5,
  },
  // text
  text: {
    fontSize: 10,
    lineHeight: 15,
    alignSelf: 'center',
    marginTop: '8%',
  },
  //button
  button: {
    marginTop: '3%',
    borderRadius: 10,
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    height: '7%',
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)', // Màu đổ bóng
    shadowOffset: {width: 0, height: 4}, // Độ lệch theo trục x và y
    shadowOpacity: 0.5, // Độ mờ của đổ bóng
    shadowRadius: 4, // Bán kính mờ của đổ bóng
    elevation: 4, // Chỉ dùng cho Android (tương tự shadowRadius)
  },
  textButton: {
    fontSize: 13,
    lineHeight: 19,
  },
});

export default styles;
