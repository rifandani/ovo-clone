import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

import Colors from '../constants/Colors';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

const data = [
  {
    source: require('../assets/hotdog.png'),
    sourceBgColor: Colors.info,
    title: 'Voucher 100.000',
    subtitle: 'McDonalds',
    desc: 'Tersedia 3418 vouchers',
    price: '60.000',
  },
  {
    source: require('../assets/burger.png'),
    sourceBgColor: Colors.secondary,
    title: 'Discount 40%',
    subtitle: 'Burger King',
    desc: 'Tersedia 19590 vouchers',
    price: '75.000',
  },
  {
    source: require('../assets/pizza.png'),
    sourceBgColor: Colors.success,
    title: 'Promo Paket Rendang',
    subtitle: 'Pizza Hut Delivery',
    desc: 'Tersedia 1185 vouchers',
    price: '95.000',
  },
];

function renderItem({ item, index }) {
  return (
    <Card key={index} style={styles.item}>
      <Card.Cover
        style={{
          ...styles.itemImg,
          backgroundColor: item.sourceBgColor,
        }}
        source={item.source}
        resizeMode="contain"
      />

      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
      <Text style={styles.itemPrice}>Rp {item.price}</Text>
    </Card>
  );
}

const DealsKebahagiaan = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const [index, setIndex] = useState(0);
  let carouselRef = useRef();

  return (
    <View
      style={{
        ...styles.kebahagiaanContainer,
        backgroundColor: isDarkMode ? Colors.dark : Colors.lightGrey,
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
          Kolom Kebahagiaan
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.lihatSemua}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>

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

export default DealsKebahagiaan;

const styles = StyleSheet.create({
  kebahagiaanContainer: {
    height: deviceHeight / 2.1,
    padding: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    height: 220,
    elevation: 2,
  },
  itemImg: {
    height: deviceHeight / 5.5,
    width: 280,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 10,
  },
  itemSubtitle: {
    fontSize: 15,
    paddingLeft: 10,
  },
  itemDesc: {
    fontSize: 12,
    color: Colors.grey,
    paddingTop: 2,
    paddingLeft: 10,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary,
    paddingTop: 5,
    paddingLeft: 10,
  },
});
