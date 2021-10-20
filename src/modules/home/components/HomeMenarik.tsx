/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';

const styles = StyleSheet.create({
  rootContainer: {
    height: Dimension.deviceHeight / 1.75,
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  headerSubtitle: {
    fontSize: 12,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentCard: {
    height: Dimension.deviceHeight / 2.6,
    width: Dimension.deviceWidth / 2.4,
    elevation: 3,
  },
  contentCardImg: {
    height: Dimension.deviceHeight / 7,
  },
  contentCardTitle: {
    marginVertical: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  contentCardBody: {
    marginHorizontal: 10,
    color: Colors.grey,
    fontSize: 12,
  },
  actionButton: {
    marginTop: 28,
  },
  contentCardButtonText: {
    marginTop: 10,
    textAlign: 'center',
    color: Colors.success,
  },
});

const HomeMenarik: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const backgroundColor = React.useMemo(
    () => (isDarkMode ? Colors.dark.background : Colors.light.background),
    [isDarkMode],
  );
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  return (
    <ThemedView style={{ ...styles.rootContainer, backgroundColor }}>
      {/* header */}
      <ThemedView style={styles.headerContainer}>
        <MontserratText
          style={{
            ...styles.headerTitle,
            color,
          }}>
          Yang Menarik di OVO
        </MontserratText>

        <MontserratText
          style={{
            ...styles.headerSubtitle,
            color,
          }}>
          Jangan ngaku update kalau belum nyobain fitur ini
        </MontserratText>
      </ThemedView>

      {/* content */}
      <ThemedView style={styles.contentContainer}>
        <Card
          style={{
            ...styles.contentCard,
            backgroundColor,
          }}>
          <Card.Cover
            style={styles.contentCardImg}
            source={require('../../../../assets/help.png')}
            resizeMode="contain"
          />

          <MontserratText
            style={{
              ...styles.contentCardTitle,
              color,
            }}>
            Pusat Bantuan
          </MontserratText>

          <MontserratText style={styles.contentCardBody}>
            Punya kendala atau pertanyaan terkait OVO? Kamu bisa kirim disini
          </MontserratText>

          <TouchableOpacity>
            <MontserratText style={styles.contentCardButtonText}>
              Lihat Bantuan
            </MontserratText>
          </TouchableOpacity>
        </Card>

        <Card
          style={{
            ...styles.contentCard,
            backgroundColor,
          }}>
          <Card.Cover
            style={styles.contentCardImg}
            source={require('../../../../assets/covid.png')}
            resizeMode="contain"
          />

          <MontserratText
            style={{
              ...styles.contentCardTitle,
              color,
            }}>
            Asuransi COVID-19
          </MontserratText>

          <MontserratText style={styles.contentCardBody}>
            Dapatkan Asuransi Covid-19 Bebas Premi
          </MontserratText>

          <TouchableOpacity style={styles.actionButton}>
            <MontserratText style={styles.contentCardButtonText}>
              Daftar Sekarang
            </MontserratText>
          </TouchableOpacity>
        </Card>
      </ThemedView>
    </ThemedView>
  );
};

export default HomeMenarik;
