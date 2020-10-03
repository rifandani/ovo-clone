import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';

import Colors from '../constants/Colors';
import { deviceHeight, deviceWidth } from '../constants/Dimensions';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ScanQR() {
  const { isDarkMode } = useContext(ThemeContext);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQrData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQrData({
      type,
      data,
    });
    Alert.alert('QR Scan', 'Successfully scanned');
  };

  const handleResultClick = () => {
    Linking.openURL(qrData.data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setQrData(null);
  };

  // if user did not granted the camera permissions
  if (hasPermission === null) {
    return (
      <View style={styles.otherContainer}>
        <Text
          style={{
            ...styles.buttonText,
            color: isDarkMode ? Colors.light : Colors.dark,
          }}
        >
          Requesting for camera permission...
        </Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.otherContainer}>
        <Text
          style={{
            ...styles.buttonText,
            color: isDarkMode ? Colors.light : Colors.dark,
          }}
        >
          No access to camera. Scanning needs to get access to the camera.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.qrContainer}>
      {!scanned && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      )}

      {scanned && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.resultButton}
            onPress={handleResultClick}
          >
            <Text style={styles.resultText}>Open QR Result</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleScanAgain}>
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  otherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    // ...StyleSheet.absoluteFillObject,
    height: deviceHeight / 1,
    width: deviceWidth / 1,
    bottom: deviceHeight / 12,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight / 1.5,
    width: deviceWidth / 1,
  },
  button: {
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    height: deviceHeight / 15,
    marginBottom: deviceHeight / 40,
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultButton: {
    backgroundColor: Colors.info,
    justifyContent: 'center',
    alignItems: 'center',
    height: deviceHeight / 14,
    width: deviceWidth / 2,
    marginBottom: deviceHeight / 40,
    padding: 20,
    borderRadius: 20,
  },
  resultText: {
    color: Colors.light,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
