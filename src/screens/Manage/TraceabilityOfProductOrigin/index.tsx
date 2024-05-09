// import {
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import React, {useRef, useState} from 'react';
// import styles from './style';
// import LinearGradient from 'react-native-linear-gradient';
// import OTPTextView from 'react-native-otp-textinput';
// import Clipboard from '@react-native-clipboard/clipboard';
// import {useNavigation} from '@react-navigation/native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import {images} from '../../../assets/theme/images';
// import Title from '../../../components/Title';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';

// export default function Index() {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'CMND or CCCD', value: 'cmndorcccd'},
//     {label: 'Driving permit', value: 'drivingpermit'},
//     {label: 'Passport', value: 'passport'},
//     {label: 'Residence permit', value: 'residencepermit'},
//   ]);
//   const navigation = useNavigation() as any;
//   const input = useRef<OTPTextView>(null);
//   const handleCellTextChange = async (text: any, i: any) => {
//     if (i === 0) {
//       const clippedText = await Clipboard.getString();
//       if (clippedText.slice(0, 1) === text) {
//         input.current?.setValue(clippedText, true);
//       }
//     }
//   };
//   return (
//     <ImageBackground
//       resizeMode="stretch"
//       source={images.backGround}
//       style={styles.imageBG}>
//       <View style={{flex: 1, top: '8%'}}>
//         {/* title */}
//         <View style={styles.title}>
//           <TouchableOpacity
//             style={styles.goback}
//             activeOpacity={0.3}
//             onPress={() => navigation.goBack()}>
//             <Image style={{width: 8, height: 13}} source={images.iconBack} />
//           </TouchableOpacity>
//           <Text style={[styles.texttitle, styles.font]}>
//             Traceability of product origin
//           </Text>
//         </View>
//         {/* secsion */}
//         <View style={{flex: 1}}>
//           {/* image */}
//           <View style={styles.imgresend}>
//             <Image source={images.imageResend2} />
//           </View>
//           {/* select dropdown */}
//           <View style={styles.select}>
//             <View>
//               {/* text */}
//               <Text style={[styles.textselect, styles.font]}>
//                 Select your ID type
//               </Text>
//             </View>
//             {/* select */}
//             <View>
//               <LinearGradient
//                 locations={[0, 1]}
//                 colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
//                 start={{x: 0, y: 0}}
//                 end={{x: 0, y: 1}}
//                 style={styles.gradientInput}>
//                 <DropDownPicker
//                   open={open}
//                   value={value}
//                   items={items}
//                   setOpen={setOpen}
//                   setValue={setValue}
//                   setItems={setItems}
//                   zIndex={1000}
//                   containerStyle={{
//                     position: 'absolute',
//                   }}
//                   placeholder="Select your ID type"
//                   placeholderStyle={{
//                     color: 'rgba(255, 255, 255, 0.8)',
//                     fontWeight: '400',
//                     fontFamily: 'IBMPlexSans-Regular',
//                     fontSize: 16,
//                     lineHeight: 19,
//                   }}
//                   style={{}}
//                   dropDownContainerStyle={{
//                     zIndex: 1000,
//                     elevation: 5000,
//                   }}
//                   theme="GRADIENT"
//                 />
//               </LinearGradient>
//             </View>
//           </View>
//           {/* up passport size photo */}
//           <View>
//             {/* text */}
//             <Text style={[styles.textselect, styles.font, styles.upphoto]}>
//               Upload passport size photo
//             </Text>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 marginHorizontal: '9%',
//               }}>
//               {/* upload front side */}
//               <View style={styles.upload}>
//                 <TouchableOpacity
//                   style={{alignItems: 'center'}}
//                   onPress={() => navigation.navigate('CameraKYC')}>
//                   <Image source={images.camera} />
//                   <Text style={[styles.textupload, styles.font]}>
//                     Upload front side
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               {/* upload reverse side */}
//               <View style={styles.upload}>
//                 <TouchableOpacity
//                   style={{alignItems: 'center'}}
//                   onPress={() => navigation.navigate('CameraKYC')}>
//                   <Image source={images.camera} />
//                   <Text style={[styles.textupload, styles.font]}>
//                     Upload reverse side
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           {/* proviso */}
//           <View>
//             {/* one */}
//             <View style={styles.frameproviso}>
//               <Image style={styles.iconproviso} source={images.iconyes} />
//               <Text style={styles.textproviso}>
//                 Upload a colourful full-size (4 sides visible) photo of the
//                 {'\n'}document.
//               </Text>
//             </View>
//             {/* two */}
//             <View style={styles.frameproviso}>
//               <Image style={styles.iconproviso} source={images.iconno} />
//               <Text style={styles.textproviso}>
//                 Do not upload selfies, screenshort and do not modify{'\n'}the
//                 images in graphic editors.
//               </Text>
//             </View>
//           </View>
//           {/* button */}
//           <View style={styles.containerButon}>
//             <TouchableOpacity
//               style={styles.button}
//               activeOpacity={0.3}
//               onPress={() => navigation.navigate('Login')}>
//               <LinearGradient
//                 locations={[0, 1]}
//                 colors={['#2AFCFF', '#00FB91']}
//                 start={{x: 1, y: 0}}
//                 end={{x: 0, y: 1}}
//                 style={styles.gradient}>
//                 <Text style={[styles.resend, styles.font]}>RESEND</Text>
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </View>
//         {/* bottom */}
//       </View>
//     </ImageBackground>
//   );
// }
