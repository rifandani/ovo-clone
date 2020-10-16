import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { deviceHeight, deviceWidth } from '../../constants/Dimensions';
import { ThemeContext } from '../../contexts/ThemeContext';

const HomeMenarik = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <View style={styles.menarikContainer}>
      {/* first row */}
      <View style={styles.firstRow}>
        <Text
          style={{
            ...styles.firstRowText1,
            color: isDarkMode ? Colors.light : Colors.dark,
          }}
        >
          Yang Menarik di OVO
        </Text>
        <Text
          style={{
            ...styles.firstRowText2,
            color: isDarkMode ? Colors.light : Colors.dark,
          }}
        >
          Jangan ngaku update kalau belum nyobain fitur ini
        </Text>
      </View>

      {/* second row */}
      <View style={styles.secondRow}>
        <Card
          style={{
            ...styles.card,
            backgroundColor: isDarkMode ? Colors.primary : 'white',
          }}
        >
          <Card.Cover
            style={styles.cover}
            source={require('../../assets/help.png')}
            resizeMode="contain"
          />
          <Text
            style={{
              ...styles.title,
              color: isDarkMode ? Colors.light : Colors.dark,
            }}
          >
            Pusat Bantuan
          </Text>
          <Text style={styles.subtitle}>
            Punya kendala atau pertanyaan terkait OVO? Kamu bisa kirim disini
          </Text>
          <TouchableOpacity>
            <Text style={styles.actionText}>Lihat Bantuan</Text>
          </TouchableOpacity>
        </Card>
        <Card
          style={{
            ...styles.card,
            backgroundColor: isDarkMode ? Colors.primary : 'white',
          }}
        >
          <Card.Cover
            style={styles.cover}
            source={require('../../assets/covid.png')}
            resizeMode="contain"
          />
          <Text
            style={{
              ...styles.title,
              color: isDarkMode ? Colors.light : Colors.dark,
            }}
          >
            Asuransi COVID-19
          </Text>
          <Text style={styles.subtitle}>
            Dapatkan Asuransi Covid-19 Bebas Premi
          </Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Daftar Sekarang</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

export default HomeMenarik;

const styles = StyleSheet.create({
  menarikContainer: {
    height: deviceHeight / 1.47,
    padding: 20,
  },
  firstRow: {
    marginBottom: 20,
  },
  firstRowText1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  firstRowText2: {
    fontSize: 12,
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    height: deviceHeight / 2.6,
    width: deviceWidth / 2.4,
    elevation: 3,
  },
  cover: {
    height: deviceHeight / 7,
  },
  title: {
    marginVertical: 10,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    marginHorizontal: 10,
    color: Colors.grey,
    fontSize: 12,
  },
  actionButton: {
    marginTop: 28,
  },
  actionText: {
    marginTop: 10,
    textAlign: 'center',
    color: Colors.success,
  },
});
