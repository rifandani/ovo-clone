import React from 'react';
import { Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

/* ----------------------------------------- HomeService ---------------------------------------- */

export type FirstRowData = {
  iconName: React.ComponentProps<typeof Entypo>['name'];
  iconColor: string;
  text: string;
  price: string;
};

export type SecondRowData = {
  iconName: React.ComponentProps<typeof Entypo>['name'];
  iconColor: string;
  text: string;
  price: string;
};

/* ------------------------------------------ HomePromo ----------------------------------------- */

export type PromoData = {
  id: string;
  imgSource: React.ComponentProps<typeof Image>['source'];
};
