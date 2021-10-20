import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageSourcePropType, OpaqueColorValue } from 'react-native';

/* ------------------------------------------ DealsList ----------------------------------------- */

export type FirstListData = {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  iconColor: string | typeof OpaqueColorValue;
  size: number;
  text: string;
};

export type SecondListData = {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  iconColor: string | typeof OpaqueColorValue;
  size: number;
  text: string;
};

/* -------------------------------------- DealsKebahagiaan -------------------------------------- */

export type CarouselData = {
  key: string;
  source: ImageSourcePropType;
  sourceBgColor: string;
  title: string;
  subtitle: string;
  desc: string;
  price: string;
};

/* ---------------------------------------- DealsCashback --------------------------------------- */

export type CashbackCarouselData = {
  key: string;
  source: ImageSourcePropType;
  sourceBgColor: string;
};
