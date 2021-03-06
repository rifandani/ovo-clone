import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-paper';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import { Bold } from '../constants/Fonts';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Header({ title, backButton }) {
  const { goBack } = useNavigation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.header,
        justifyContent: backButton ? 'flex-start' : 'space-between',
        paddingTop: backButton
          ? Constants.statusBarHeight + 10
          : Constants.statusBarHeight,
        paddingBottom: backButton ? 5 : 10,
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
    padding: 10,
    paddingLeft: 5,
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
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
    fontSize: 22,
    fontFamily: Bold,
    padding: 5,
    textAlignVertical: 'bottom',
  },
  titleWithBackButton: {
    color: Colors.light,
    fontSize: 18,
    fontFamily: Bold,
    padding: 7,
    marginLeft: 5,
  },
});
