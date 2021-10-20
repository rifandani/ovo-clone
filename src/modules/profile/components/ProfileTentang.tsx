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
  ProfileTentangContainer: {
    height: Dimension.deviceHeight / 2.05,
    width: '100%',
    paddingRight: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 15,
    marginTop: 20,
  },
});

const ProfileTentang: React.FC = () => {
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
        ...styles.ProfileTentangContainer,
        backgroundColor,
      }}>
      {/* title */}
      <MontserratText
        style={{
          ...styles.title,
          color,
        }}>
        Tentang
      </MontserratText>

      <ProfileListItem iconName="ribbon" text="Keuntungan Pakai OVO" divider />
      <ProfileListItem iconName="lightbulb" text="Panduan OVO" divider />
      <ProfileListItem
        iconName="file-document-edit"
        text="Syarat dan Ketentuan"
        divider
      />
      <ProfileListItem
        iconName="shield-check"
        text="Kebijakan Privasi"
        divider
      />
      <ProfileListItem iconName="help-circle" text="Pusat Bantuan" />
    </ThemedView>
  );
};

export default ProfileTentang;
