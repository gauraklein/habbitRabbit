import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HabbitComponent = () => {
    return (
        <View style={styles.container}>
            <Text>TESTING HABBIT VIEW</Text>
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
