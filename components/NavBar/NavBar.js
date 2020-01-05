import React from 'react';
import { Button, Text, View } from 'react-native'
import { styles } from './NavBarStyleSheet'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export const NavBar = (props) => {
    return (
        <View style={styles.navBar}>
             <Button
                title="All Habbits"
                onPress={props.handleAllHabbitView.bind(this)}
            />
            <Button
                title="Single Habbit"
                onPress={props.handleHabbitView.bind(this)}
            />
            <Button
                title="Add Habbit"
                onPress={props.handleAddHabbitView.bind(this)}
            />
        </View>
    )
}


