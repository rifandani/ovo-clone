import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
// files - components
import HomeScreen from './HomeScreen';
import DealsScreen from './DealsScreen';
import ScanScreen from './ScanScreen';
import FinanceScreen from './FinanceScreen';
import ProfileScreen from './ProfileScreen';
import Colors from '../constants/Colors';

const FinanceTab = createBottomTabNavigator();

export default function FinanceTabScreen() {
  return (
    <FinanceTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.dark,
        style: styles.style,
        tabStyle: styles.tabStyle,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            return focused ? (
              <Entypo name="home" size={size} color={color} />
            ) : (
              <AntDesign name="home" size={size} color={color} />
            );
          } else if (route.name === 'Deals') {
            return focused ? (
              <AntDesign name="tag" size={size} color={color} />
            ) : (
              <AntDesign name="tago" size={size} color={color} />
            );
          } else if (route.name === 'Scan') {
            return (
              <AntDesign
                name="qrcode"
                size={size}
                color="white"
                style={styles.scan}
              />
            );
          } else if (route.name === 'Finance') {
            iconName = focused ? 'credit-card-alt' : 'credit-card';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-circle' : 'user-circle-o';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <FinanceTab.Screen name="Home" component={HomeScreen} />
      <FinanceTab.Screen name="Deals" component={DealsScreen} />
      <FinanceTab.Screen name="Scan" component={ScanScreen} />
      <FinanceTab.Screen name="Finance" component={FinanceScreen} />
      <FinanceTab.Screen name="Profile" component={ProfileScreen} />
    </FinanceTab.Navigator>
  );
}

const styles = StyleSheet.create({
  style: {
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    backgroundColor: 'white',
  },
  tabStyle: {
    paddingVertical: 5,
  },
  scan: {
    backgroundColor: Colors.primary,
    borderRadius: 100,
    padding: 15,
    marginBottom: 30,
  },
});
