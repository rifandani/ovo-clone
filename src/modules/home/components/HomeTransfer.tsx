import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { HomeScreenUseNavigation } from '../types';

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: 'red',
    paddingVertical: 10,
    marginTop: -20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    elevation: 3,
  },
  item: {
    alignItems: 'center',
  },
  itemText: {
    color: Colors.primary,
  },
});

const HomeTransfer: React.FC = () => {
  // hooks
  const { push } = useNavigation<HomeScreenUseNavigation>();
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.secondary : Colors.primary),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.rootContainer,
        backgroundColor,
      }}>
      <TouchableOpacity style={styles.item} onPress={() => push('TopUp')}>
        <MaterialCommunityIcons
          name="wallet-plus-outline"
          size={24}
          color={Colors.primary}
        />
        <MontserratText style={{ ...styles.itemText, color }}>
          Top Up
        </MontserratText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons
          name="bank-transfer"
          size={24}
          color={Colors.primary}
        />
        <MontserratText style={{ ...styles.itemText, color }}>
          Transfer
        </MontserratText>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <MaterialCommunityIcons
          name="history"
          size={24}
          color={Colors.primary}
        />
        <MontserratText style={{ ...styles.itemText, color }}>
          History
        </MontserratText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default HomeTransfer;
