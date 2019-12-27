import React from 'react';
import { Button, Text, View } from 'react-native'
import { styles } from './NavBarStyleSheet'

export const NavBar = (props) => {
    return (
        <View style={styles.navBar}>
            <Button
                title="Habbits"
                onPress={props.handleHabbitView.bind(this)}
            />
            <Button
                title="Add Habbit"
                onPress={props.handleAddHabbitView.bind(this)}
            />
        </View>
    )
}
