import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../constants/Colors';
import { ThemeContext } from '../contexts/ThemeContext';

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
    color: Colors.light.text,
  },
  switch: {
    marginTop: 10,
    padding: 5,
  },
  title: {
    color: Colors.light.text,
    fontSize: 22,
    fontWeight: 'bold',
    padding: 5,
    textAlignVertical: 'bottom',
  },
  titleWithBackButton: {
    color: Colors.light.text,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 7,
    marginLeft: 5,
  },
});

type HeaderProps = {
  title: string;
  backButton: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, backButton }) => {
  const { goBack } = useNavigation();
  const { isDarkMode, toggleTheme } = React.useContext(ThemeContext);

  return (
    <ThemedView
      style={{
        ...styles.header,
        justifyContent: backButton ? 'flex-start' : 'space-between',
        paddingTop: backButton
          ? Constants.statusBarHeight + 10
          : Constants.statusBarHeight,
        paddingBottom: backButton ? 5 : 10,
      }}>
      {backButton ? (
        <>
          <TouchableOpacity style={styles.leftButton} onPress={goBack}>
            <AntDesign style={styles.leftIcon} name="left" size={20} />
          </TouchableOpacity>

          <MontserratText style={styles.titleWithBackButton}>
            {title}
          </MontserratText>
        </>
      ) : (
        <>
          <MontserratText style={styles.title}>{title}</MontserratText>

          <Switch
            style={styles.switch}
            value={isDarkMode}
            onValueChange={toggleTheme}
          />
        </>
      )}
    </ThemedView>
  );
};

export default Header;
