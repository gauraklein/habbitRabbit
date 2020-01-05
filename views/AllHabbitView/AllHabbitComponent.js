import React from 'react';
import { Button,TextInput, Text, View } from 'react-native';
import { styles } from './AllHabbitStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";

export const AllHabbitComponent = (props) => {
    console.log(props);

    return(
        <View style={styles.fullContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    THIS IS THE ALL HABBIT COMPONENT
                </Text>
            </View>


                <View style={styles.navContainer}>
                    < NavBar {...props}/>
                </View>
        </View>
    )
}