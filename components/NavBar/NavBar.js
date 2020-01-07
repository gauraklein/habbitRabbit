import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native'
import { styles } from './NavBarStyleSheet'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';



export const NavBar = (props) => {
    return (
        <View style={styles.navBar}>
             <TouchableOpacity
             style={styles.button}
                onPress={props.handleAllHabbitView.bind(this)}
            >
                <Text
                style={styles.buttonText}>
                    All Habbits
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.button}    
                onPress={props.handleAddHabbitView.bind(this)}
            >
                <Text style={styles.buttonText}>
                    Add Habbit
                </Text>
            </TouchableOpacity>
        </View>
    )
}


