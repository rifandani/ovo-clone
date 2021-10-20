import React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { firstListData, secondListData } from '../mocks/dealsList';

const styles = StyleSheet.create({
  nikmatContainer: {
    height: Dimension.deviceHeight / 1.75,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
  },
  list: {
    height: Dimension.deviceHeight / 3,
    width: '100%',
    marginTop: 10,
    paddingVertical: 20,
  },
  firstList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  secondList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 13,
  },
});

const DealsList: React.FC = () => {
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
        ...styles.nikmatContainer,
        backgroundColor,
      }}>
      {/* Title */}
      <ThemedView style={styles.firstRow}>
        <MontserratText
          style={{
            ...styles.title,
            color,
          }}>
          Nikmat Dunia Lainnya
        </MontserratText>
      </ThemedView>

      {/* subitle */}
      <MontserratText
        style={{
          ...styles.subtitle,
          color,
        }}>
        Silakan dilihat-lihat kakak
      </MontserratText>

      {/* list */}
      <ThemedView style={styles.list}>
        {/* first row */}
        <ThemedView style={styles.firstList}>
          {firstListData.map(el => (
            <ThemedView style={styles.item} key={el.iconName}>
              <MaterialCommunityIcons
                name={el.iconName}
                color={el.iconColor}
                size={el.size}
              />

              <MontserratText
                style={{
                  ...styles.itemText,
                  color,
                }}>
                {el.text}
              </MontserratText>
            </ThemedView>
          ))}
        </ThemedView>

        {/* second row */}
        <ThemedView style={styles.secondList}>
          {secondListData.map(data => (
            <ThemedView style={styles.item} key={data.iconName}>
              <MaterialCommunityIcons
                name={data.iconName}
                color={data.iconColor}
                size={data.size}
              />

              <MontserratText
                style={{
                  ...styles.itemText,
                  color,
                }}>
                {data.text}
              </MontserratText>
            </ThemedView>
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default DealsList;
