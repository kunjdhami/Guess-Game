import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Card = (props) => {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
        // here ...styles.card will apply styles from following styles
        // and ...props.style will import and append another styles from the component/ file from where its beind called
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black', // all these shadow properties work on iOS only
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, //this is for android
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;