import React from 'react';
import { Button,TextInput, Text, View } from 'react-native';
import { styles } from './AddHabbitStylesheet'

export const AddHabbitComponent = (props) => {
    console.log(props);

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Add A habbit that you would like to form here!
            </Text>
            <TextInput
                label='Habbit'
                placeholder="habbit"
                value={props.habbitInput}
                />
                <Button
                title='Add Habbit'
                onPress={props.handleAddHabbit.bind(props.habbitInput)}/>
        </View>
    )
}
