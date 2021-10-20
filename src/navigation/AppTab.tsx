import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// files
import HomeNavigation from '../modules/home/navigation';
import DealsScreen from '../modules/deals/screens/DealsScreen';
import ScanScreen from '../modules/scan/screens/ScanScreen';
import FinanceScreen from '../modules/finance/screens/FinanceScreen';
import ProfileScreen from '../modules/profile/screens/ProfileScreen';
import TabBarIcon from '../modules/shared/components/TabBarIcon';
import Colors from '../modules/shared/constants/Colors';
import { BottomTabParamList } from './types';

const styles = StyleSheet.create({
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

const { Navigator, Screen } = createBottomTabNavigator<BottomTabParamList>();

const AppTab: React.FC = () => {
  return (
    <Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.dark.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Screen
        name="HomeStack"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" size={size} color={color} />
          ),
          title: 'Home',
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: styles.tabStyle,
        }}
      />

      <Screen
        name="Deals"
        component={DealsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="tago" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: styles.tabStyle,
        }}
      />

      <Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="qrcode" color={color} size={size} />
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: styles.scan,
        }}
      />

      <Screen
        name="Finance"
        component={FinanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="creditcard" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: styles.tabStyle,
        }}
      />

      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: styles.tabStyle,
        }}
      />
    </Navigator>
  );
};

export default AppTab;
