import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DatesScreen } from './src/screens/DatesScreen';
import { HangoutsScreen } from './src/screens/HangoutsScreen';
import { ShopScreen } from './src/screens/ShopScreen';
import { MeScreen } from './src/screens/MeScreen';
import { AuthScreen } from './src/screens/AuthScreen';
import { useAppStore } from './src/store/appStore';
import { palette, darkPalette } from './src/theme';

const Tab = createBottomTabNavigator();
function Tabs() {
  const dark = useAppStore((state) => state.darkMode); const c = dark ? darkPalette : palette;
  return <Tab.Navigator screenOptions={({ route }) => ({
    headerShown: false, tabBarActiveTintColor: palette.purple, tabBarInactiveTintColor: c.muted,
    tabBarStyle: { height: 72, paddingTop: 8, paddingBottom: 10, backgroundColor: c.surface, borderTopColor: c.line },
    tabBarLabelStyle: { fontSize: 11, fontWeight: '700' },
    tabBarIcon: ({ color, focused }) => { const names: Record<string, keyof typeof Ionicons.glyphMap> = { Dates: focused ? 'heart' : 'heart-outline', Hangouts: focused ? 'people' : 'people-outline', Shop: focused ? 'bag' : 'bag-outline', Me: focused ? 'person' : 'person-outline' }; return <Ionicons name={names[route.name]} size={23} color={color}/>; }
  })}><Tab.Screen name="Dates" component={DatesScreen}/><Tab.Screen name="Hangouts" component={HangoutsScreen}/><Tab.Screen name="Shop" component={ShopScreen}/><Tab.Screen name="Me" component={MeScreen}/></Tab.Navigator>;
}
export default function App() {
  const authenticated = useAppStore((state) => state.authenticated); const dark = useAppStore((state) => state.darkMode);
  return <SafeAreaProvider><NavigationContainer><StatusBar style={dark ? 'light' : 'dark'}/>{authenticated ? <Tabs/> : <AuthScreen/>}</NavigationContainer></SafeAreaProvider>;
}
