import { ImageSourcePropType } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

export type IntroScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Intro'
>;

export type Slide = {
  key: string;
  title: string;
  text: string;
  image: ImageSourcePropType;
};
