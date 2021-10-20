/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Image } from 'react-native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  topContainer: {
    height: Dimension.deviceHeight / 9,
    borderBottomColor: Colors.lightGrey,
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  topImg: {
    height: 60,
    width: 40,
    borderRadius: 9999,
    marginHorizontal: 15,
  },
  nama: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  hp: {
    color: Colors.grey,
    fontSize: 12,
    letterSpacing: 1.3,
  },
});

const ProfileTop: React.FC = () => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.topContainer,
        backgroundColor,
      }}>
      <Image
        style={styles.topImg}
        source={require('../../../../assets/prof.png')}
        resizeMode="contain"
      />

      <ThemedView>
        <MontserratText
          style={{
            ...styles.nama,
            color,
          }}>
          Tri Rizeki Rifandani
        </MontserratText>

        <MontserratText style={styles.hp}>0822-4319-9535</MontserratText>
      </ThemedView>
    </ThemedView>
  );
};

export default ProfileTop;
