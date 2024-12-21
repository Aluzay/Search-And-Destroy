import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function FuseBomb() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleArm = () => {
    alert('Code saisi : ' + input + '\nBombe armée ! 🚨');
  };

  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Saisie du Code</Text>

      {/* Affichage */}
      <TextInput
        style={styles.display}
        value={input}
        editable={false}
        mode="outlined"
        outlineColor="green"
        textColor='white'
        theme={{
          colors: {
            text: 'white',
            placeholder: 'white',
          },
        }}
      />

      {/* Pavé numérique */}
      <View style={styles.keypad}>
        {/* Chiffres de 1 à 9 */}
        {[
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((number) => (
              <Button
                key={number}
                mode="contained"
                style={styles.numberButton}
                rippleColor="rgba(34, 85, 34, 0.5)"
                contentStyle={styles.rippleContent}
                onPress={() => handlePress(number.toString())}
              >
                {number}
              </Button>
            ))}
          </View>
        ))}

        {/* Ligne pour 0 */}
        <View style={styles.zeroRow}>
          <Button
            mode="contained"
            style={styles.numberButton}
            onPress={() => handlePress('0')}
            rippleColor="rgba(34, 85, 34, 0.5)"
            contentStyle={styles.rippleContent}
          >
            0
          </Button>
        </View>

        {/* Boutons Clear et Armer */}
        <View style={styles.row}>
          <Button mode="contained" style={styles.clearButton} onPress={handleClear} contentStyle={styles.rippleContent} rippleColor="rgba(160, 0, 0, 0.5)">
            Erase
          </Button>
          <Button mode="contained" style={styles.armButton} onPress={handleArm} rippleColor="rgba(0, 128, 0, 0.5)" contentStyle={styles.rippleContent}>
            Defuse
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  display: {
    backgroundColor: '#2E2E2E',
    color: 'white',
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 20,
  },
  keypad: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  zeroRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  numberButton: {
    backgroundColor: '#225522',
    margin: 5,
    width: 70,
    height: 70,
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#A00000',
    margin: 5,
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
  armButton: {
    backgroundColor: '#008000', 
    margin: 5,
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
  rippleContent: {
    width: '100%',
    height: '100%',
  }
});