import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { CashbackCarouselData } from '../types/mocks';
import { cashbackCarouselData } from '../mocks/dealsCashback';

const styles = StyleSheet.create({
  cashbackContainer: {
    height: Dimension.deviceHeight / 2.5,
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
    height: Dimension.deviceHeight / 5,
    width: Dimension.deviceWidth / 3,
  },
});

const renderItem: React.FC<{ item: CashbackCarouselData }> = ({ item }) => {
  return (
    <ThemedView
      key={item.key}
      style={{
        ...styles.item,
        backgroundColor: item.sourceBgColor,
      }}>
      <Image style={styles.itemImg} source={item.source} resizeMode="contain" />
    </ThemedView>
  );
};

const DealsCashback: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const [, setIndex] = React.useState<number>(0);
  const carouselRef = React.useRef<Carousel<CashbackCarouselData> | null>(null);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  return (
    <ThemedView
      style={{
        ...styles.cashbackContainer,
        backgroundColor,
      }}>
      {/* Title */}
      <ThemedView style={styles.firstRow}>
        <MontserratText
          style={{
            ...styles.title,
            color,
          }}>
          Cashback Lagi dan Lagi
        </MontserratText>

        <TouchableOpacity style={styles.button}>
          <MontserratText style={styles.lihatSemua}>Lihat Semua</MontserratText>
        </TouchableOpacity>
      </ThemedView>

      {/* subitle */}
      <MontserratText
        style={{
          ...styles.subtitle,
          color,
        }}>
        Serbu Berbagai cashback terbaru OVO
      </MontserratText>

      {/* Carousel */}
      <ThemedView style={styles.carousel}>
        <Carousel
          contentContainerCustomStyle={styles.contentContainer}
          data={cashbackCarouselData}
          renderItem={renderItem}
          onSnapToItem={idx => setIndex(idx)}
          ref={ref => {
            carouselRef.current = ref; // carouselRef = ref
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

export default DealsCashback;
