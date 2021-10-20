import React from 'react';
import { StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
// files
import Header from '../../shared/components/Header';
import InstanTopUp from '../components/InstanTopUp';
import MetodeLain from '../components/MetodeLain';
import { ThemedView } from '../../shared/components/Themed';
import MontserratText from '../../shared/components/MontserratText';
import Colors from '../../shared/constants/Colors';
import Dimension from '../../shared/constants/Dimensions';
import { RenderTabBarProps, Route } from '../types';

const styles = StyleSheet.create({
  indicatorStyle: { backgroundColor: Colors.info },
  tabBarStyle: { backgroundColor: Colors.primary },
  routeTitle: {
    margin: 0,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  screenContainer: { flex: 1 },
  screenInitialLayout: {
    width: Dimension.deviceWidth,
  },
});

const renderTabBar: React.FC<RenderTabBarProps> = props => (
  <TabBar
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBarStyle}
    renderLabel={({ route, color }) => (
      <MontserratText style={[styles.routeTitle, { color }]}>
        {route.title}
      </MontserratText>
    )}
  />
);

const TopUpScreen: React.FC = () => {
  // tab view
  const [index, setIndex] = React.useState<number>(0);
  const [routes] = React.useState<Route[]>([
    { key: 'first', title: 'Instan Top Up' },
    { key: 'second', title: 'Metode Lain' },
  ]);

  return (
    <ThemedView style={styles.screenContainer}>
      {/* header */}
      <Header backButton title="Top Up" />

      {/* content */}
      <TabView
        initialLayout={styles.screenInitialLayout}
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: InstanTopUp,
          second: MetodeLain,
        })}
      />
    </ThemedView>
  );
};

export default TopUpScreen;
