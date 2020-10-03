// import React from 'react';
// import { StyleSheet, View, Image } from 'react-native';
// import * as SplashScreen from 'expo-splash-screen';
// import { Asset } from 'expo-asset';

// const MySplashScreen = ({ setIsReady }) => {
//   const cacheSplashResourcesAsync = async () => {
//     SplashScreen.hideAsync();

//     const gif = require('../assets/splash.gif');
//     await Asset.fromModule(gif).downloadAsync();

//     setIsReady(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/splash.gif')}
//         onLoad={cacheSplashResourcesAsync}
//         resizeMode="contain"
//       />
//     </View>
//   );
// };

// export default MySplashScreen;

// const styles = StyleSheet.create({
//   container: { flex: 1 },
// });
