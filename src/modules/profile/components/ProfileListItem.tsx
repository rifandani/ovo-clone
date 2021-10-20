import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { ProfileListItemProps } from '../types/profileListItem';

const styles = StyleSheet.create({
  itemContainer: {
    height: Dimension.deviceHeight / 13,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginHorizontal: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  lihatDetail: {
    color: Colors.grey,
    marginRight: 2,
  },
});

const ProfileListItem: React.FC<ProfileListItemProps> = ({
  iconName,
  text,
  showLihatDetail,
  divider,
}) => {
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
        ...styles.itemContainer,
        backgroundColor,
        borderBottomColor: divider ? Colors.lightGrey : 'white',
        borderBottomWidth: divider ? 1 : 0,
      }}>
      <ThemedView style={styles.leftContainer}>
        <MaterialCommunityIcons
          style={styles.leftIcon}
          name={iconName}
          color={Colors.secondary}
          size={20}
        />

        <MontserratText
          style={{
            ...styles.itemText,
            color,
          }}>
          {text}
        </MontserratText>
      </ThemedView>

      <ThemedView style={styles.rightContainer}>
        {showLihatDetail ? (
          <MontserratText style={styles.lihatDetail}>
            Lihat Detail
          </MontserratText>
        ) : null}

        <MaterialCommunityIcons
          color={Colors.secondary}
          name="chevron-right"
          size={20}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default ProfileListItem;
