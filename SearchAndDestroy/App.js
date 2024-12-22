import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FuseBomb from './Screens/fuseBomb';
import BottomNav from './Components/BottomNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="BottomNav"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="BottomNav" component={BottomNav} />
            <Stack.Screen name="FuseBomb" component={FuseBomb} />
          </Stack.Navigator>
        </NavigationContainer>
     </PaperProvider>
  );
}