import { Theme } from '@react-navigation/native';
// files
import Colors from './Colors';

export const MyLightTheme: Theme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.light.background,
    card: Colors.green,
    text: Colors.light.text,
    border: Colors.grey,
    notification: Colors.info,
  },
};

export const MyDarkTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.secondary,
    background: Colors.dark.background,
    card: Colors.success,
    text: Colors.dark.text,
    border: Colors.grey,
    notification: Colors.info,
  },
};
