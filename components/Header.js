import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-paper';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header({ title, backButton }) {
  const { goBack } = useNavigation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.header,
        justifyContent: backButton ? 'flex-start' : 'space-between',
      }}
    >
      {backButton ? (
        <>
          <TouchableOpacity style={styles.leftButton} onPress={() => goBack()}>
            <AntDesign style={styles.leftIcon} name="left" size={20} />
          </TouchableOpacity>

          <Text style={styles.titleWithBackButton}>{title}</Text>
        </>
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>

          <Switch
            style={styles.switch}
            value={isDarkMode}
            onValueChange={toggleTheme}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    flexDirection: 'row',
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
  },
  leftButton: {},
  leftIcon: {
    padding: 10,
    color: Colors.light,
  },
  switch: {
    marginTop: 10,
    padding: 5,
  },
  title: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: 22,
    padding: 5,
    textAlignVertical: 'bottom',
  },
  titleWithBackButton: {
    color: Colors.light,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 7,
    marginLeft: 5,
  },
});
