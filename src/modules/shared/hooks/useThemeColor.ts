// files
import useColorScheme from './useColorScheme';
import Colors from '../../shared/constants/Colors';

export type UseThemeColor = {
  props: { light?: string; dark?: string };
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark;
};

const useThemeColor = (
  props: UseThemeColor['props'],
  colorName: UseThemeColor['colorName'],
): string => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[theme][colorName];
};

export default useThemeColor;
