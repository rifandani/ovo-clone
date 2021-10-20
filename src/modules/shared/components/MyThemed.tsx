/* eslint-disable react/jsx-props-no-spreading */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import { Text, View } from 'react-native';
// files
import { ThemeContext } from '../contexts/ThemeContext';
import Colors from '../constants/Colors';

export type TextProps = Text['props'];
export type ViewProps = View['props'];

// components
export const MyThemedText: React.FC<TextProps> = props => {
  const { style, ...otherProps } = props;

  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  return <Text style={[{ color }, style]} {...otherProps} />;
};

export const MyThemedView: React.FC<ViewProps> = props => {
  const { style, ...otherProps } = props;

  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};
