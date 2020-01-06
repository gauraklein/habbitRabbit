import React from 'react';
import { Dimensions, TouchableOpacity, Button,TextInput, Text, View } from 'react-native';
import { styles } from './AddHabbitStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";
import { LinearGradient } from 'expo-linear-gradient';


export const AddHabbitComponent = (props) => {
    console.log(props);

    return(
        <View style={styles.fullContainer}>
               <LinearGradient
          colors={['#41b3a3', '#7DC3AF']}
          style={{
            // position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: Dimensions.get('window').height,
            // borderWidth: 10
          }}
        >
            <View style={styles.container}>
                <Text style={styles.text}>
                    Studies show that a habbit takes approximately 66 days to become permanent.
                    {"\n"} 
                    {"\n"} 
                    Habbit Rabbit was created to help you keep track of those days.

                </Text>
                <TextInput
                    style={{
                        marginTop: 40,
                        width: Dimensions.get('window').width - 100,
                        borderBottomWidth: 3,
                        textAlign: "center",
                        fontSize: 15,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 0.3,
                        shadowRadius: 2
                    }}
                    label='Habbit'
                    placeholder="What habbit would you like to create?"
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
            </LinearGradient>        
        </View>
    )
}
