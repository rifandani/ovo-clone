import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Image, StyleSheet, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { IntroScreenProps, Slide } from '../types';
import { slides } from '../mocks';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    color: Colors.secondary,
    marginVertical: Dimension.deviceHeight / 16,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '700',
  },
  image: {
    width: Dimension.deviceWidth / 1,
    height: Dimension.deviceHeight / 2,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.light.text,
    marginTop: Dimension.deviceHeight / 35,
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  leftButton: {
    backgroundColor: Colors.secondary,
    flex: 1,
    borderRadius: 9999,
    padding: 10,
    marginLeft: Dimension.deviceWidth / 25,
  },
  rightButton: {
    backgroundColor: Colors.secondary,
    flex: 1,
    borderRadius: 9999,
    padding: 10,
    marginRight: Dimension.deviceWidth / 25,
  },
  activeDotStyle: {
    backgroundColor: Colors.secondary,
  },
});

const IntroScreen: React.FC<IntroScreenProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Slide }) => {
    return (
      <ThemedView style={styles.slide}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <MontserratText style={styles.title}>{item.title}</MontserratText>
        <Image style={styles.image} source={item.image} />
        <MontserratText style={styles.text}>{item.text}</MontserratText>
      </ThemedView>
    );
  };

  const renderSkipButton = () => {
    return (
      <ThemedView style={styles.leftButton}>
        <MaterialIcons name="skip-next" color="white" size={24} />
      </ThemedView>
    );
  };

  const renderNextButton = () => {
    return (
      <ThemedView style={styles.rightButton}>
        <MaterialIcons name="navigate-next" color="white" size={24} />
      </ThemedView>
    );
  };

  const renderDoneButton = () => {
    return (
      <ThemedView style={styles.rightButton}>
        <MaterialIcons name="done" color="white" size={24} />
      </ThemedView>
    );
  };

  const onDone = () => {
    navigation.navigate('AppTab');
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
      activeDotStyle={styles.activeDotStyle}
    />
  );
};

export default IntroScreen;
