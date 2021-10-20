/* eslint-disable react/jsx-props-no-spreading */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import { Text, View } from 'react-native';
// files
import useThemeColor from '../hooks/useThemeColor';

// types
type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & Text['props'];
export type ViewProps = ThemeProps & View['props'];

// components
export const ThemedText: React.FC<TextProps> = props => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <Text style={[{ color }, style]} {...otherProps} />;
};

export const ThemedView: React.FC<ViewProps> = props => {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
};
