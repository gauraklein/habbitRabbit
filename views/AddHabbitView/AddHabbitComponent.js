import React from 'react';
import { TouchableOpacity, Button,TextInput, Text, View } from 'react-native';
import { styles } from './AddHabbitStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";

export const AddHabbitComponent = (props) => {
    console.log(props);

    return(
        <View style={styles.fullContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Add A habbit that you would like to form here!
                </Text>
                <TextInput
                    style={{
                        marginTop: 40
                    }}
                    label='Habbit'
                    placeholder="habbit"
                    // value={""}
                    onChangeText={props.handleTypeHabbit.bind(this)}
                    />
            {/* </View>     */}
            {/* <View style={styles.container}> */}
                    <TouchableOpacity
                        style={styles.customBtnBG}
                        onPress={props.handleAddHabbit.bind(this, props.habbitToAdd, props.habbitArray.length)}
                        >
                        <Text style={styles.customBtnText}>Add Habbit</Text>
                    </TouchableOpacity>
                    {/* <Button
                    title='Add Habbit'
                    onPress={props.handleAddHabbit.bind(this, props.habbitToAdd, props.habbitArray.length)}
                    /> */}
            </View>


                <View style={styles.navContainer}>
                    < NavBar {...props}/>
                </View>
        </View>
    )
}
