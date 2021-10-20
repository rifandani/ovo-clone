import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type ProfileListItemProps = {
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
  text: string;
  showLihatDetail?: boolean;
  divider?: boolean;
};
