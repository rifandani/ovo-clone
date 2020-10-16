import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { ThemeContext } from '../../contexts/ThemeContext';
import { deviceHeight } from '../../constants/Dimensions';

const DealsLangkah = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.langkahRoot,
        backgroundColor: isDarkMode ? Colors.dark : Colors.lightGrey,
      }}
    >
      <ImageBackground
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        imageStyle={{ borderRadius: 10 }}
        source={require('../../assets/bg1.png')}
        resizeMode="cover"
      >
        {/* gambar */}
        <Image
          style={styles.image}
          source={require('../../assets/bulb.png')}
          resizeMode="contain"
        />

        {/* texts */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>1 Langkah</Text>
          <Text style={styles.text}>menuju deals</Text>
        </View>

        {/* icon */}
        <Entypo
          style={styles.logo}
          name="chevron-small-right"
          size={24}
          color="white"
        />
      </ImageBackground>
    </View>
  );
};

export default DealsLangkah;

const styles = StyleSheet.create({
  langkahRoot: {
    flex: 1,
    width: '100%',
    height: deviceHeight / 4.7,
    padding: 15,
  },
  image: {
    height: 70,
    width: 70,
    marginHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  text: {
    color: Colors.light,
    fontSize: 17,
    fontWeight: 'bold',
  },
  logo: {
    marginHorizontal: 20,
  },
});
