import React, {useRef} from 'react';
import { SectionList, FlatList, TouchableOpacity, Button, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { styles } from './NewUserStylesheet'
import { NavBar} from "../../components/NavBar/NavBar";
import { LinearGradient } from 'expo-linear-gradient';

export const HabbitComponent = (props) => {
    console.log(props.habbitArray);

    // onSwipeLeft(gestureState) {
    //     console.log('leftSwipe')
    // }

    return (

     
        <View style={{
            flex: 1,
            height: Dimensions.get('window').height

        }}>
          
        

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

            <View style={styles.navContainer}>
                <NavBar {...props}/>
            </View>
        </LinearGradient>
    </View>
  
    )
};