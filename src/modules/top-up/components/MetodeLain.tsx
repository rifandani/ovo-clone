import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// files
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { flatListData } from '../mocks/metodeLain';
import { FlatListData } from '../types/mocks';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstRowContainer: {
    height: Dimension.deviceHeight / 3.6,
    padding: 30,
  },
  firstRowDataContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    marginBottom: 20,
  },
  secondRowContainer: {
    backgroundColor: Colors.superLightGrey,
    flex: 1,
    padding: 30,
    paddingTop: 15,
    paddingBottom: 0,
  },
  secondRowDataContainer: {
    borderRadius: 5,
    padding: 3,
    borderWidth: 2,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.superLightGrey,
    alignItems: 'center',
  },
  listContainer: {
    backgroundColor: Colors.superLightGrey,
    flex: 1,
  },
  itemButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom: 5,
    height: Dimension.deviceHeight / 11,
  },
});

const MetodeLain: React.FC = () => {
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null);

  const renderItem: React.FC<{ item: FlatListData }> = ({ item }) => {
    const backgroundColor = item.key === selectedKey ? Colors.pink : 'white';

    return (
      <TouchableOpacity
        style={{
          ...styles.itemButton,
          backgroundColor,
        }}
        onPress={() => setSelectedKey(item.key)}>
        <ThemedView style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name={item.iconName}
            color={item.iconColor}
            size={40}
          />

          <MontserratText style={{ marginLeft: 7 }}>{item.text}</MontserratText>
        </ThemedView>

        <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>
    );
  };

  return (
    <ThemedView style={styles.rootContainer}>
      {/* first row */}
      <ThemedView style={styles.firstRowContainer}>
        <ThemedView style={styles.firstRowDataContainer}>
          <MontserratText style={{ color: Colors.grey }}>
            Top Up Saldo ke
          </MontserratText>

          <MontserratText style={{ fontSize: 15, fontWeight: '500' }}>
            OVO Cash
          </MontserratText>
        </ThemedView>

        <ThemedView style={styles.secondRowDataContainer}>
          <MontserratText style={{ color: Colors.grey }}>
            SALDO OVO CASH
          </MontserratText>

          <MontserratText style={{ fontSize: 15, fontWeight: '700' }}>
            Rp50.000
          </MontserratText>
        </ThemedView>

        <MontserratText
          style={{ textAlign: 'center', fontSize: 12, marginTop: 5 }}>
          Maks. Saldo OVO Cash Rp10.000.000
        </MontserratText>
      </ThemedView>

      {/* top up method */}
      <ThemedView style={styles.secondRowContainer}>
        <MontserratText
          style={{ color: Colors.grey, textAlign: 'center', marginBottom: 20 }}>
          Top up makin mudah dengan metode berikut:
        </MontserratText>

        <ThemedView style={styles.listContainer}>
          <FlatList
            data={flatListData}
            renderItem={renderItem}
            extraData={selectedKey}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default MetodeLain;
