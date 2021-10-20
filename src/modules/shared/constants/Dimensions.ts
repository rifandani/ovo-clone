import { Dimensions } from 'react-native';

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('screen');
const { width, height, scale, fontScale } = Dimensions.get('window');

const Dimension = {
  deviceHeight,
  deviceWidth,
  window: {
    width,
    height,
    scale,
    fontScale,
  },
  isSmallDevice: width < 375,
};

export default Dimension;
