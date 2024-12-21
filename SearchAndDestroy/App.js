import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FuseBomb from './Screens/fuseBomb';
import BottomNav from './Components/BottomNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}