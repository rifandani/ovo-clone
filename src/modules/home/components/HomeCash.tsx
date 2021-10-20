/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    height: Dimension.deviceHeight / 4.5,
  },
  imgBackground: {
    height: Dimension.deviceHeight / 4.5,
    paddingHorizontal: 15,
    paddingTop: 8,
  },
  imgStyle: { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  ovoCash: {
    color: Colors.dark.text,
  },
  rpContainer: {
    flexDirection: 'row',
    marginVertical: Dimension.deviceHeight / 50,
  },
  rp: {
    color: Colors.dark.text,
    marginRight: 3,
    fontWeight: 'bold',
  },
  rpDigits: {
    color: Colors.dark.text,
    fontSize: 22,
    fontWeight: 'bold',
  },
  pointsContainer: {
    flexDirection: 'row',
  },
  point: {
    color: Colors.dark.text,
    marginRight: 3,
  },
  pointDigits: {
    color: 'orange',
    fontWeight: 'bold',
  },
});

const HomeCash: React.FC = () => {
  // hooks
  const { cashContext } = React.useContext(ThemeContext);
  const [cash, setCash] = React.useState<string>('0');
  const { getItem } = useAsyncStorage('cash');

  useFocusEffect(
    React.useCallback(() => {
      const readItemFromStorage = async () => {
        const item = await getItem();
        setCash(item || '0');
      };

      // Do something when the screen is focused
      readItemFromStorage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cashContext]),
  );

  return (
    <ThemedView style={styles.rootContainer} darkColor={Colors.dark.background}>
      <ImageBackground
        source={require('../../../../assets/bgHome.png')}
        style={styles.imgBackground}
        imageStyle={styles.imgStyle}
        resizeMode="stretch">
        <MontserratText style={styles.ovoCash}>OVO Cash</MontserratText>

        <View style={styles.rpContainer}>
          <MontserratText style={styles.rp}>Rp</MontserratText>
          <MontserratText style={styles.rpDigits}>{cash}</MontserratText>
        </View>

        <View style={styles.pointsContainer}>
          <MontserratText style={styles.point}>OVO Points</MontserratText>
          <MontserratText style={styles.pointDigits}>3.495</MontserratText>
        </View>
      </ImageBackground>
    </ThemedView>
  );
};

export default HomeCash;
