import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  ProfileFooterContainer: {
    height: Dimension.deviceHeight / 3,
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 20,
  },
  version: {
    color: Colors.grey,
  },
  hashtag: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 13,
  },
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  textButton: {
    color: Colors.light.text,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

const ProfileFooter: React.FC = () => {
  // hooks
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
        ...styles.ProfileFooterContainer,
        backgroundColor,
      }}>
      <ThemedView style={styles.textContainer}>
        <MontserratText style={styles.version}>
          Version 3.20.0 (288)
        </MontserratText>

        <MontserratText
          style={{
            ...styles.hashtag,
            color,
          }}>
          #pakeOVOaja
        </MontserratText>
      </ThemedView>

      <TouchableOpacity style={styles.button}>
        <MontserratText style={styles.textButton}>Sign Out</MontserratText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default ProfileFooter;
