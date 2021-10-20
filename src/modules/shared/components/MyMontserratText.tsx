/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// files
import { TextProps, MyThemedText } from './MyThemed';

const MyMontserratText: React.FC<TextProps> = props => {
  const { style, ...otherProps } = props;

  return (
    <MyThemedText
      style={[style, { fontFamily: 'Montserrat_400Regular' }]}
      {...otherProps}
    />
  );
};

export default MyMontserratText;
