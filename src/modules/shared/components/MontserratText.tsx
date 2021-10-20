/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// files
import { ThemedText, TextProps } from './Themed';

export default function MontserratText(props: TextProps): JSX.Element {
  const { style, ...otherProps } = props;

  return (
    <ThemedText
      style={[style, { fontFamily: 'Montserrat_400Regular' }]}
      {...otherProps}
    />
  );
}
