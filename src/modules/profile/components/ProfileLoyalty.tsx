import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  profileLoyaltyContainer: {
    height: Dimension.deviceHeight / 4.7,
    width: '100%',
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 25,
  },
  qrLoyalty: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderColor: Colors.lightGrey,
    backgroundColor: 'white',
  },
  itemText: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

const ProfileLoyalty: React.FC = () => {
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
        ...styles.profileLoyaltyContainer,
        backgroundColor,
      }}>
      {/* title */}
      <MontserratText
        style={{
          ...styles.title,
          color,
        }}>
        OVO ID
      </MontserratText>

      {/* qr and loyalty */}
      <ThemedView style={styles.qrLoyalty}>
        {/* qr */}
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            color={Colors.secondary}
            name="qrcode"
            size={20}
          />

          <MontserratText style={styles.itemText}>QR Code</MontserratText>
        </TouchableOpacity>

        {/* loyalty */}
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            color={Colors.secondary}
            name="city-variant-outline"
            size={20}
          />

          <MontserratText style={styles.itemText}>Loyalty</MontserratText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export default ProfileLoyalty;
