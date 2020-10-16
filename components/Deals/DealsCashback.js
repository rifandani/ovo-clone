import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Colors from '../../constants/Colors';
import { deviceHeight, deviceWidth } from '../../constants/Dimensions';
import { ThemeContext } from '../../contexts/ThemeContext';

const data = [
  {
    source: require('../../assets/gear.png'),
    bgColor: Colors.warning,
  },
  {
    source: require('../../assets/arrow.png'),
    bgColor: Colors.success,
  },
  {
    source: require('../../assets/chart.png'),
    bgColor: Colors.secondary,
  },
];

function renderItem({ item, index }) {
  return (
    <View
      key={index}
      style={{
        ...styles.item,
        backgroundColor: item.bgColor,
      }}
    >
      <Image style={styles.itemImg} source={item.source} resizeMode="contain" />
    </View>
  );
}

const DealsCashback = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [index, setIndex] = useState(0);
  let carouselRef = useRef();

  return (
    <View
      style={{
        ...styles.cashbackContainer,
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
          Cashback Lagi dan Lagi
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

      {/* subitle */}
      <Text
        style={{
          ...styles.subtitle,
          color: isDarkMode ? Colors.light : Colors.grey,
        }}
      >
        Serbu Berbagai cashback terbaru OVO
      </Text>

      {/* Carousel */}
      <View style={styles.carousel}>
        <Carousel
          layout="default"
          ref={(ref) => (carouselRef = ref)}
          data={data}
          sliderWidth={1000}
          itemWidth={280}
          renderItem={renderItem}
          onSnapToItem={(index) => setIndex(index)}
          contentContainerCustomStyle={styles.contentContainer}
          inactiveSlideScale={0.9}
          inactiveSlideShift={1}
          removeClippedSubviews
        />
      </View>
    </View>
  );
};

export default DealsCashback;

const styles = StyleSheet.create({
  cashbackContainer: {
    height: deviceHeight / 2.5,
    padding: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 6,
  },
  subtitle: {
    fontSize: 12,
  },
  lihatSemua: {
    color: Colors.success,
    fontSize: 12,
    fontWeight: 'bold',
  },
  carousel: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  contentContainer: {
    padding: 10,
    paddingLeft: 0,
    marginLeft: 0,
  },
  item: {
    borderRadius: 10,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  itemImg: {
    height: deviceHeight / 5,
    width: deviceWidth / 3,
  },
});
