import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Linking,
  // Modal,
} from 'react-native';
import { Portal, Provider, Modal } from 'react-native-paper';

import Colors from '../../constants/Colors';
import { deviceHeight } from '../../constants/Dimensions';

const HomeModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleNantiDulu = () => {
    setModalVisible(false);
  };

  const handleSayaPenasaran = () => {
    setModalVisible(false);
    Linking.openURL('https://www.ovo.id/about/');
  };

  return (
    <Provider>
      <Portal>
        <Modal onDismiss={handleNantiDulu} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modal}>
              <Image
                style={styles.img}
                source={require('../../assets/ovo-tokopedia.png')}
                resizeMode="stretch"
              />

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{ ...styles.button, borderRightWidth: 1 }}
                  onPress={handleNantiDulu}
                >
                  <Text style={styles.buttonText}>Nanti Dulu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSayaPenasaran}
                >
                  <Text style={styles.buttonText}>Saya Penasaran</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default HomeModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -StatusBar.currentHeight,
  },
  modal: {
    height: deviceHeight / 2.5,
    width: '90%',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
  },
  img: {
    height: deviceHeight / 3,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  button: {
    width: '50%',
    borderColor: Colors.secondary,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.light,
    fontWeight: 'bold',
  },
});
