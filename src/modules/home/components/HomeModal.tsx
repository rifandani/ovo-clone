/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import * as Linking from 'expo-linking';
import { Portal, Modal, Provider } from 'react-native-paper';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
  modal: {
    height: Dimension.deviceHeight / 2.5,
    width: '90%',
    borderRadius: 20,
    elevation: 5,
    alignItems: 'center',
  },
  img: {
    height: Dimension.deviceHeight / 3,
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
    color: Colors.dark.text,
    fontWeight: 'bold',
  },
});

const HomeModal: React.FC = () => {
  const [modalVisible, setModalVisible] = React.useState<boolean>(true);

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
          <ThemedView style={styles.centeredView}>
            <ThemedView style={styles.modal}>
              <Image
                style={styles.img}
                source={require('../../../../assets/ovo-tokopedia.png')}
                resizeMode="stretch"
              />

              <ThemedView style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{ ...styles.button, borderRightWidth: 1 }}
                  onPress={handleNantiDulu}>
                  <MontserratText style={styles.buttonText}>
                    Nanti Dulu
                  </MontserratText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSayaPenasaran}>
                  <MontserratText style={styles.buttonText}>
                    Saya Penasaran
                  </MontserratText>
                </TouchableOpacity>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default HomeModal;
