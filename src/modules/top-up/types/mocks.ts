import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* ----------------------------------------- MetodeLain ---------------------------------------- */

export type FlatListData = {
  key: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  text: string;
  iconColor: string;
};
