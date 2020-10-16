import React, { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import Colors from '../../constants/Colors';
import { deviceHeight, deviceWidth } from '../../constants/Dimensions';
import { ThemeContext } from '../../contexts/ThemeContext';

const promoData = [
  {
    imgSource: require('../../assets/promo1.png'),
  },
  {
    imgSource: require('../../assets/promo2.png'),
  },
  {
    imgSource: require('../../assets/promo3.png'),
  },
];

const HomePromo = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View
      style={{
        ...styles.promoContainer,
        backgroundColor: isDarkMode ? Colors.dark : 'white',
      }}
    >
      {/* Title */}
      <View style={styles.firstRow}>
        <Text
          style={{
            ...styles.title,
            color: isDarkMode ? Colors.light : Colors.dark,
          }}
        >
          Info dan Promo Spesial
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {/* Image Slider */}
      <Swiper
        style={styles.wrapper}
        dotColor="white"
        activeDotColor={Colors.success}
        paginationStyle={styles.paginationStyle}
      >
        {promoData &&
          promoData.map((el, i) => (
            <View style={styles.slide} key={i}>
              <Image
                style={styles.slideImg}
                source={el.imgSource}
                resizeMode="contain"
              />
            </View>
          ))}
      </Swiper>
    </View>
  );
};

export default HomePromo;

const styles = StyleSheet.create({
  promoContainer: {
    height: deviceHeight / 2.9,
    padding: 20,
    paddingBottom: 10,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 6,
  },
  lihatSemua: {
    color: Colors.success,
    fontSize: 12,
    fontWeight: 'bold',
  },
  wrapper: {},
  paginationStyle: {
    bottom: 0,
  },
  slide: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slideImg: {
    height: deviceHeight / 4.7,
    width: deviceWidth / 1,
    borderRadius: 10,
    transform: [{ scaleX: 1.2 }],
  },
});
