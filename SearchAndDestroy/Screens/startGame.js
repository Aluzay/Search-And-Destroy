import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function StartGame() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamemodes</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('FuseBomb')} // Navigue vers FuseBomb
      >
        Search and Destroy
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23272A',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#008000',
  },
});
