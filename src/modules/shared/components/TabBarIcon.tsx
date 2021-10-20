/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

// types
export type TabBarIconProps = React.ComponentProps<typeof AntDesign>;

// components
const TabBarIcon: React.FC<TabBarIconProps> = props => {
  // const { name, color, size = 30, ...rest } = props;
  const { name, color, size = 30, ...otherProps } = props;

  return (
    <AntDesign
      {...otherProps}
      style={{ marginBottom: -3 }}
      name={name}
      color={color}
      size={size}
    />
  );
};

export default TabBarIcon;
