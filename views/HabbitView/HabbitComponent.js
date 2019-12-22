import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './HabbitViewStylesheet'

export const HabbitComponent = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.habbit}</Text>
            <Text style={styles.text} onPress={props.testFunction.bind(this)}>{props.test}</Text>
        </View>
    )
}


