import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { promoData } from '../mocks/homePromo';

const styles = StyleSheet.create({
  rootContainer: {
    height: Dimension.deviceHeight / 2.9,
    padding: 20,
    paddingBottom: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerButton: {
    marginTop: 6,
  },
  headerButtonText: {
    color: Colors.success,
    fontSize: 12,
    fontWeight: 'bold',
  },
  swiperContainer: {},
  swiperPaginationStyle: {
    bottom: 0,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slideImg: {
    height: Dimension.deviceHeight / 4.7,
    width: Dimension.deviceWidth / 1,
    borderRadius: 10,
    transform: [{ scaleX: 1.2 }],
  },
});

const HomePromo: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <ThemedView style={styles.rootContainer} darkColor={Colors.dark.background}>
      {/* Title */}
      <ThemedView style={styles.headerContainer}>
        <MontserratText style={styles.headerTitle} darkColor={Colors.dark.text}>
          Info dan Promo Spesial
        </MontserratText>

        <TouchableOpacity style={styles.headerButton}>
          <MontserratText style={styles.headerButtonText}>
            Lihat Semua
          </MontserratText>
        </TouchableOpacity>
      </ThemedView>

      {/* Image Slider */}
      <Swiper
        style={styles.swiperContainer}
        paginationStyle={styles.swiperPaginationStyle}
        dotColor={Colors.dark.background}
        activeDotColor={Colors.secondary}>
        {promoData.map(promo => (
          <ThemedView style={styles.slideContainer} key={promo.id}>
            <Image
              style={styles.slideImg}
              source={promo.imgSource}
              resizeMode="contain"
            />
          </ThemedView>
        ))}
      </Swiper>
    </ThemedView>
  );
};

export default HomePromo;
