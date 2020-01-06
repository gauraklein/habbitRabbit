import React from 'react';
import { TouchableOpacity, Button, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { styles } from './HabbitViewStylesheet'
import { NavBar} from "../../components/NavBar/NavBar";
import { LinearGradient } from 'expo-linear-gradient';

//THIS IS THE COMPONENT

export const HabbitComponent = (props) => {
    console.log(props.habbitArray);

    // let screenWidth = Dimensions.get('window').width;

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
                <ScrollView
                    horizontal={true}>
                    {props.habbitArray.map((singleHabbit) => {
                        return (
                            < SingleHabbitScreen
                                {...singleHabbit}
                                key={singleHabbit.habbitId.toString()}
                                handleHabbitCheckin={props.handleHabbitCheckin}
                                handleAddHabbitView={props.handleAddHabbitView}
                            />
                        )
                    })}
                </ScrollView>
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
    return (
        <View
              style={{flex: 1,
            width: Dimensions.get('window').width
            }}>
                
                <View style={styles.rabbitContainer}>
                    <View style={styles.image}>
                        <Image style={{flex: 1,
                            width: Dimensions.get('window').width,
                            marginTop: 40}} source={require('../../assets/rabbitChilling.gif')} />
                            {/* <Text style={styles.text}>RabbitGoesHere</Text> */}
                    </View>    
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>This is the habbit that you are currently building: </Text>

                    <View style={styles.container}>
                        <Text  style={styles.largeText}>{singleHabbitObject.habbit}</Text>
                    </View>
                    
                </View>

                <View style={styles.container}>

                    <View style={styles.container}>
                        <Text style={styles.text}>You have <Text style={styles.largeText}>{66 - singleHabbitObject.habbitDailyCount}</Text> days of repetition left to build this habit!</Text>
                        <TouchableOpacity
                            style={styles.customBtnBG}
                            onPress={singleHabbitObject.handleHabbitCheckin.bind(this, singleHabbitObject.habbitId)}
                        >
                            <Text style={styles.customBtnText}>Checkin with Habbit</Text>
                        </TouchableOpacity>
                       
                    </View>
                </View>
        </View>
    )
}
