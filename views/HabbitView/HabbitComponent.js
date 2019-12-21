import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HabbitComponent = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <Text>TESTING HABBIT VIEW</Text>
            <Text onPress={props.testFunction.bind(this)}>{props.test}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

});
