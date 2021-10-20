/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: Dimension.deviceHeight / 4.7,
    padding: 15,
  },
  imageBackground: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackgroundImageStyle: { borderRadius: 10 },
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
    color: Colors.light.text,
    fontSize: 17,
    fontWeight: 'bold',
  },
  logo: {
    marginHorizontal: 20,
  },
});

const DealsLangkah: React.FC = () => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.container,
        backgroundColor,
      }}>
      <ImageBackground
        style={styles.imageBackground}
        imageStyle={styles.imageBackgroundImageStyle}
        source={require('../../../../assets/bg1.png')}
        resizeMode="cover">
        {/* gambar */}
        <Image
          style={styles.image}
          source={require('../../../../assets/bulb.png')}
          resizeMode="contain"
        />

        {/* texts */}
        <ThemedView style={styles.textContainer}>
          <MontserratText style={styles.text}>1 Langkah</MontserratText>
          <MontserratText style={styles.text}>menuju deals</MontserratText>
        </ThemedView>

        {/* icon */}
        <Entypo
          style={styles.logo}
          name="chevron-small-right"
          color="white"
          size={24}
        />
      </ImageBackground>
    </ThemedView>
  );
};

export default DealsLangkah;
