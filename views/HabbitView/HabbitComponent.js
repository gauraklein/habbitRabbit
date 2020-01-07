import React, {useRef} from 'react';
import { SectionList, FlatList, TouchableOpacity, Button, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { styles } from './HabbitViewStylesheet'
import { NavBar} from "../../components/NavBar/NavBar";
import { LinearGradient } from 'expo-linear-gradient';
// import Swipeable from 'react-native-gesture-handler/Swipeable'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


//THIS IS THE COMPONENT

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
            <View
                style={styles.fullContainer}>

                    <SingleHabbitScreen 
                    {...props.habbitArray[props.habbitToDisplayIndex]}
                    makeRabbitUnhappy={props.makeRabbitUnhappy}
                    handleHabbitCheckin={props.handleHabbitCheckin}
                    handleAddHabbitView={props.handleAddHabbitView}>
                        <Text>TEST</Text>
                    </SingleHabbitScreen>

            </View>

            <View style={styles.navContainer}>
                <NavBar {...props}/>
            </View>
        </LinearGradient>
    </View>
  
    )
};


//RENDERS HABBIT

function SingleHabbitScreen (singleHabbitObject) {
    console.log(singleHabbitObject, 'this is the single habbit object')
    let rabbitSource = require('../../assets/rabbitChilling.gif')
    if (singleHabbitObject.isRabbitHappy) {
       rabbitSource = require('../../assets/rabbitHeartsLoop.gif')
       singleHabbitObject.makeRabbitUnhappy(singleHabbitObject.habbitId)
    } 
    return (
        <View
              style={{flex: 1,
            width: Dimensions.get('window').width
            }}>
                
                <View style={styles.rabbitContainer}>
                    <View style={styles.image}>
                        <Image style={{flex: 1,
                            width: Dimensions.get('window').width,
                            marginTop: 40}} source={rabbitSource} />
                            {/* <Text style={styles.text}>RabbitGoesHere</Text> */}
                    </View>    
                </View>

                <View style={styles.container}>
                    {/* <Text style={styles.text}>This is the habbit that you are currently building: </Text> */}

                    <View style={styles.container}>
                        <Text  style={styles.largeText}>{singleHabbitObject.habbit}</Text>
                    </View>
                    
                </View>

                <View style={{
                    flex: 2,
                    justifyContent: "space-between"
                }}>

                    <View style={{
                        flex: 1,
                        textAlign: "center",
                        alignItems: "center"
                    }}>
                        <View style={{
                            flex: 1,
                            marginBottom: 10,
                            width: Dimensions.get('window').width - 50,
                            borderRadius: 40,
                            backgroundColor: '#edf5e1',
                            alignItems: "center",
                            justifyContent: "center",
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 0.3,
                            shadowRadius: 2 
                        }}>
                            
                            <Text style={styles.largeText}>{66 - singleHabbitObject.habbitDailyCount}</Text> 
                            <Text style={styles.text}>
                        {"\n"} more days 
                        {"\n"}to create this habit!</Text>

                        <TouchableOpacity
                            style={styles.customBtnBG}
                            onPress={singleHabbitObject.handleHabbitCheckin.bind(this, singleHabbitObject.habbitId)}
                        >
                            <Text style={styles.customBtnText}>Checkin with Habbit</Text>
                        </TouchableOpacity>

                        </View>
                        
                        
                       
                    </View>
                </View>
        </View>
    )
}

