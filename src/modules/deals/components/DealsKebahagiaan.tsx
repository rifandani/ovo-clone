import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { carouselData } from '../mocks/dealsKebahagiaan';
import { CarouselData } from '../types/mocks';

const styles = StyleSheet.create({
  kebahagiaanContainer: {
    height: Dimension.deviceHeight / 2.1,
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
    height: Dimension.deviceHeight / 5.5,
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

const renderItem: React.FC<{ item: CarouselData }> = ({ item }) => {
  return (
    <Card key={item.key} style={styles.item}>
      <Card.Cover
        style={{
          ...styles.itemImg,
          backgroundColor: item.sourceBgColor,
        }}
        source={item.source}
        resizeMode="contain"
      />

      <MontserratText style={styles.itemTitle}>{item.title}</MontserratText>
      <MontserratText style={styles.itemSubtitle}>
        {item.subtitle}
      </MontserratText>
      <MontserratText style={styles.itemDesc}>{item.desc}</MontserratText>
      <MontserratText style={styles.itemPrice}>Rp {item.price}</MontserratText>
    </Card>
  );
};

const DealsKebahagiaan: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const [, setIndex] = React.useState<number>(0);
  const carouselRef = React.useRef<Carousel<CarouselData> | null>(null);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.lightGrey),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.kebahagiaanContainer,
        backgroundColor,
      }}>
      {/* Title */}
      <ThemedView style={styles.firstRow}>
        <MontserratText
          style={{
            ...styles.title,
            color,
          }}>
          Kolom Kebahagiaan
        </MontserratText>

        <TouchableOpacity style={styles.button}>
          <MontserratText style={styles.lihatSemua}>Lihat Semua</MontserratText>
        </TouchableOpacity>
      </ThemedView>

      {/* Carousel */}
      <ThemedView style={styles.carousel}>
        <Carousel
          contentContainerCustomStyle={styles.contentContainer}
          data={carouselData}
          renderItem={renderItem}
          onSnapToItem={idx => setIndex(idx)}
          ref={ref => {
            // carouselRef = ref
            carouselRef.current = ref;
          }}
          removeClippedSubviews
          layout="default"
          sliderWidth={1000}
          itemWidth={280}
          inactiveSlideScale={0.9}
          inactiveSlideShift={1}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default DealsKebahagiaan;
