import React from 'react';
import { Button,TextInput, Text, View } from 'react-native';
import { styles } from './loginStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";
import FBLoginButton from '../../components/FBLoginButton'

export const LoginComponent = (props) => {
    console.log(props, 'from login page');

    return(
        <View style={styles.container}>

            <View style={styles.container}>
                <Text style={styles.text}>LOGIN</Text> 
            </View>
            {/* <View style={styles.container}>
                < FBLoginButton />
            </View> */}
            < NavBar {...props} />
        </View>
    )
}
