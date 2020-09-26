import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';

const slides = [
  {
    key: 'one',
    title: 'Record',
    text: 'Record all your\nincome and expenses',
    image: require('../assets/savings.png'),
  },
  {
    key: 'two',
    title: 'Track',
    text: 'Track all your\nbusiness transactions',
    image: require('../assets/homeImg.png'),
  },
  {
    key: 'three',
    title: 'Report',
    text: 'Make a report\nbased on your transactions',
    image: require('../assets/payments.png'),
  },
];

const IntroScreen = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.leftButton}>
        <MaterialIcons name="skip-next" color="white" size={24} />
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.rightButton}>
        <MaterialIcons name="navigate-next" color="white" size={24} />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.rightButton}>
        <MaterialIcons name="done" color="white" size={24} />
      </View>
    );
  };

  const onDone = () => {
    navigate('Finance');
  };

  return (
    <AppIntroSlider
      showSkipButton
      data={slides}
      renderItem={renderItem}
      renderSkipButton={renderSkipButton}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      onDone={onDone}
    />
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: Colors.secondary,
    marginVertical: deviceHeight / 16,
    fontSize: 25,
    textAlign: 'center',
  },
  image: {
    width: deviceWidth / 1,
    height: deviceHeight / 2,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.dark,
    marginTop: deviceHeight / 35,
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 2,
  },
  leftButton: {
    backgroundColor: Colors.secondary,
    flex: 1,
    borderRadius: 9999,
    padding: 10,
    marginLeft: deviceWidth / 25,
  },
  rightButton: {
    backgroundColor: Colors.secondary,
    flex: 1,
    borderRadius: 9999,
    padding: 10,
    marginRight: deviceWidth / 25,
  },
});
