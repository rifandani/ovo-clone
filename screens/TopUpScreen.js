import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// comps
import Header from '../components/Header';
import InstanTopUp from '../components/TopUp/InstanTopUp';
import MetodeLain from '../components/TopUp/MetodeLain';
// files
import Colors from '../constants/Colors';
import { deviceWidth } from '../constants/Dimensions';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: Colors.info }}
    style={{ backgroundColor: Colors.primary }}
    renderLabel={({ route, focused, color }) => (
      <Text
        style={{
          color,
          margin: 0,
          textTransform: 'capitalize',
          fontWeight: 'bold',
        }}
      >
        {route.title}
      </Text>
    )}
  />
);

const TopUpScreen = () => {
  // tab view
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Instan Top Up' },
    { key: 'second', title: 'Metode Lain' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <Header backButton title="Top Up" />

      {/* content */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={SceneMap({
          first: InstanTopUp,
          second: MetodeLain,
        })}
        onIndexChange={setIndex}
        initialLayout={{ width: deviceWidth / 1 }}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default TopUpScreen;
