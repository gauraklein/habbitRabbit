import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './HabbitViewStylesheet'

export const HabbitComponent = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>

            <View style={styles.container}>
                <Text style={styles.text}>RabbitGoesHere</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>{props.habbit}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>{props.habbitDailyCount}</Text>
                    <Button
                        title="Checkin with Habbit"
                        onPress={props.handleHabbitCheckin.bind(this)}
                        />
                </View>

                <View style={styles.container}></View>

            </View>

        </View>
    )
};


