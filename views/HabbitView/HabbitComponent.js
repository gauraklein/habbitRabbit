import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './HabbitViewStylesheet'
import { NavBar} from "../../components/NavBar/NavBar";

export const HabbitComponent = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <View style={styles.fullContainer}>
                {/*//RABBIT AREA*/}
                <View style={styles.container}>
                    <Text style={styles.text}>RabbitGoesHere</Text>
                </View>
                {/*HABBIT AREA */}
                <View style={styles.container}>
                    <Text style={styles.text}>{props.habbit}</Text>
                </View>
                {/*HABBIT COUNTER AREA */}
                <View style={styles.container}>

                    <View style={styles.container}>
                        <Text style={styles.text}>{props.habbitDailyCount}</Text>
                        <Button
                            title="Checkin with Habbit"
                            onPress={props.handleHabbitCheckin.bind(this)}
                            />
                        <Button
                            title="Add New Habbit"
                            onPress={props.handleAddHabbitView.bind(this)}
                            />

                    </View>
                </View>
            </View>
            <View style={styles.navContainer}>
                <NavBar {...props}/>
            </View>
        </View>
    )
};


