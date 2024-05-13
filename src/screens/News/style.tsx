import { StyleSheet } from "react-native";
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
  sizeiconheader: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageiconheader: {
    marginHorizontal: '10%',
  },
  gradientInput: {
    justifyContent: 'center',
    borderRadius: 8,
    width: 335,
    height: 113,
    shadowColor: 'rgba(42, 252, 255, 0.05)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  secsioncontent: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    height: '100%',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.23,
    color: 'rgba(0, 0, 0, 1)',
    // marginTop: '4%',
  },
  viewimage: {
    width: '30%',
    marginLeft: '2%',
    marginVertical: '2%',
  },
  imageproduct: {
    width: '100%',
    height: '100%',
  },
  viewcontent: {
    flex: 1,
    width: '100%',
    marginTop: '5%',
    marginHorizontal: '3%',
  },
  description: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 11.72,
    color: 'rgba(0, 0, 0, 0.5)',
    marginVertical: '5%',
  },
  secsionbottom: {
    fontFamily: 'Roboto-Medium',
    fontWeight: '700',
    fontSize: 7,
    lineHeight: 8.2,
    color: 'rgba(0, 0, 0, 1)',
  },
  author: {
    flex: 0.4,
  },
});

export default styles

