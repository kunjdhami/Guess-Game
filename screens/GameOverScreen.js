import React, {useState, useRef, useEffect} from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Alert, Keyboard, View } from 'react-native';

const GameOverScreen = (props) => {
    return(
        <View style={styles.screen}>
            <Text>The Game is Over.</Text>
            <Text>Number of Rounds {props.roundsNumber}</Text>
            <Text>Entered Number was {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;