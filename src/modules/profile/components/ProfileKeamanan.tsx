import React from 'react';
import { StyleSheet } from 'react-native';
// files
import ProfileListItem from './ProfileListItem';
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  ProfileKeamananContainer: {
    height: Dimension.deviceHeight / 5.5,
    width: '100%',
    paddingRight: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 15,
    marginTop: 20,
  },
});

const ProfileKeamanan: React.FC = () => {
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
        ...styles.ProfileKeamananContainer,
        backgroundColor,
      }}>
      {/* title */}
      <MontserratText
        style={{
          ...styles.title,
          color,
        }}>
        Keamanan
      </MontserratText>

      <ProfileListItem iconName="lock" text="Ubah Security Code" />
    </ThemedView>
  );
};

export default ProfileKeamanan;
