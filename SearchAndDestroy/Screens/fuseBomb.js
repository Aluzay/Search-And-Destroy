import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function FuseBomb() {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  useEffect(() => { // Génère un code aléatoire à 8 chiffres entre 0 et 9
    let code = '';
    for (let i = 0; i < 16; i++) {
      code += Math.floor(Math.random() * 10);
    }
    console.log('Code généré : ' + code);
    setCode(code);
  }
  , []);

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
      {/* Conteneur principal pour l'affichage et le pavé numérique */}
      <View style={styles.centerContainer}>
        {/* Titre */}
        <Text style={styles.title}>{code}</Text>

        {/* Champ de saisie */}
        <TextInput
          style={styles.display}
          value={input}
          editable={false}
          mode="outlined"
          outlineColor="#5f8467"
          textColor="white"
          theme={{
            colors: {
              text: 'white',
              placeholder: 'white',
            },
          }}
        />

        {/* Pavé numérique */}
        <View style={styles.keypad}>
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
            >
              0
            </Button>
          </View>
        </View>
      </View>

      {/* Boutons en bas */}
      <View style={styles.bottomButtons}>
        <Button
          mode="contained"
          style={styles.clearButton}
          onPress={handleClear}
          rippleColor="rgba(160, 0, 0, 0.5)"
        >
          Erase
        </Button>
        <Button
          mode="contained"
          style={styles.armButton}
          onPress={handleArm}
          rippleColor="rgba(0, 128, 0, 0.5)"
        >
          Defuse
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23272A',
  },
  centerContainer: {
    flex: 1, // Prend tout l'espace disponible sauf celui des boutons en bas
    justifyContent: 'center', // Centre verticalement
    alignItems: 'center', // Centre horizontalement
    paddingHorizontal: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  display: {
    backgroundColor: '#23272A',
    color: 'white',
    fontSize: 28,
    textAlign: 'right',
    marginBottom: 20,
    width: '100%',
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
    backgroundColor: '#5f8467',
    margin: 5,
    width: 70,
    height: 70,
    justifyContent: 'center',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: '#A00000',
    flex: 1,
    marginRight: 10,
    height: 70,
    justifyContent: 'center',
  },
  armButton: {
    backgroundColor: '#008000',
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
});
