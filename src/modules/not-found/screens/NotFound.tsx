import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import { NotFoundScreenNavigationProp } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const NotFoundScreen: React.FC<NotFoundScreenNavigationProp> = ({
  navigation,
}) => {
  return (
    <ThemedView style={styles.container}>
      <MontserratText style={styles.title}>
        This screen does not exist.
      </MontserratText>

      <TouchableOpacity
        onPress={() => navigation.replace('AppTab')}
        style={styles.link}>
        <MontserratText style={styles.linkText}>
          Go to home screen!
        </MontserratText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default NotFoundScreen;
