import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScannedCallback, BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { ThemeContext } from '../../shared/contexts/ThemeContext';
import { QrData } from '../types/scanQR';

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
    height: Dimension.deviceHeight / 1,
    width: Dimension.deviceWidth / 1,
    bottom: Dimension.deviceHeight / 12,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimension.deviceHeight / 1.5,
    width: Dimension.deviceWidth / 1,
  },
  button: {
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    height: Dimension.deviceHeight / 15,
    marginBottom: Dimension.deviceHeight / 40,
    padding: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultButton: {
    backgroundColor: Colors.info,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimension.deviceHeight / 14,
    width: Dimension.deviceWidth / 2,
    marginBottom: Dimension.deviceHeight / 40,
    padding: 20,
    borderRadius: 20,
  },
  resultText: {
    color: Colors.light.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/
const ScanQR: React.FC = () => {
  // hooks
  const { isDarkMode } = React.useContext(ThemeContext);
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(
    null,
  );
  const [scanned, setScanned] = React.useState<boolean>(false);
  const [qrData, setQrData] = React.useState<QrData | null>(null);
  const color = React.useMemo(
    () => (isDarkMode ? Colors.dark.text : Colors.light.text),
    [isDarkMode],
  );

  React.useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned: BarCodeScannedCallback = ({ type, data }) => {
    setScanned(true);
    setQrData({
      type,
      data,
    });
    Alert.alert('QR Scan', 'Successfully scanned');
  };

  const handleResultClick = () => {
    if (qrData) Linking.openURL(qrData.data);
  };

  const handleScanAgain = () => {
    setScanned(false);
    setQrData(null);
  };

  // if user did not granted the camera permissions
  if (hasPermission === null) {
    return (
      <ThemedView style={styles.otherContainer}>
        <MontserratText
          style={{
            ...styles.buttonText,
            color,
          }}>
          Requesting for camera permission...
        </MontserratText>
      </ThemedView>
    );
  }
  if (hasPermission === false) {
    return (
      <ThemedView style={styles.otherContainer}>
        <MontserratText
          style={{
            ...styles.buttonText,
            color,
          }}>
          No access to camera. Scanning needs to get access to the camera.
        </MontserratText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.qrContainer}>
      {!scanned ? (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      ) : null}

      {scanned ? (
        <ThemedView style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.resultButton}
            onPress={handleResultClick}>
            <MontserratText style={styles.resultText}>
              Open QR Result
            </MontserratText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleScanAgain}>
            <MontserratText style={styles.buttonText}>
              Scan Again
            </MontserratText>
          </TouchableOpacity>
        </ThemedView>
      ) : null}
    </ThemedView>
  );
};

export default ScanQR;
