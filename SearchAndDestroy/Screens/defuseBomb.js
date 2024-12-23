import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button, Text, ProgressBar, MD3Colors } from 'react-native-paper';

export default function DefuseBomb() {
    const [time, setTime] = useState(50);
    const [defuseTime, setDefuseTime] = useState(0);
    const [defuseClock, setDefuseClock] = useState(true);
    const [clock, setClock] = useState(true);
    const [defuseTimeMax] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => Math.max(prev - 1, 0)); // Empêche de descendre en dessous de 0
        }, 1000);
        setClock(interval); // Garde une référence à l'intervalle
        return () => clearInterval(interval); // Nettoyage de l'intervalle
    }, []);

    useEffect(() => {
        if (time === 0) {
            clearInterval(clock);
            alert('BOOM ! 💥');
        }
    }, [time]);

    function handlePressIn() {
        console.log('Début du décompte');
        const interval = setInterval(() => {
            setDefuseTime((prev) => prev + 1);
        }
            , 1000);
        setDefuseClock(interval);
        return () => clearInterval(interval);
    }

    useEffect(() => {
        if (defuseTime === 10) {
            clearInterval(defuseClock);
            alert('Bombe désamorcée ! 🎉')
        }
    }, [defuseTime]);

    function handlePressOut() {
        console.log('Fin du décompte');
        clearInterval(defuseClock);
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Bouton couvrant tout l'écran */}
            <Button
                onPress={() => alert('Bombe désamorcée ! 🎉')}
                buttonColor="#23272A"
                style={styles.fullScreenButton}
                contentStyle={styles.fullScreenContent}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
            </Button>

            {/* Texte superposé */}
            <Text style={styles.overlayText}>{time}</Text>

            {/* Barre de progression */}
            <View style={styles.progressBarContainer}>
                <ProgressBar
                    progress={defuseTime/defuseTimeMax} // Normalise la progression entre 0 et 1
                    style={styles.progressBar}
                    color={MD3Colors.error50}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23272A',
        alignItems: 'center',
    },
    fullScreenButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    fullScreenContent: {
        height: '100%',
    },
    overlayText: {
        position: 'absolute',
        top: '5%',
        color: 'white',
        fontSize: 30,
    },
    progressBarContainer: {
        width: '100%', // Occupe toute la largeur de l'écran
        paddingHorizontal: 20, // Ajoute un espace sur les côtés
        marginBottom: 10, // Évite qu'elle touche directement le bord inférieur
        top: '95%', // La place en bas de l'écran
    },
    progressBar: {
        height: 10, // Rend la barre bien visible
    },
});
