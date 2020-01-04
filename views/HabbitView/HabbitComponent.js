import React from 'react';
import { Button, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { styles } from './HabbitViewStylesheet'
import { NavBar} from "../../components/NavBar/NavBar";


//THIS IS THE COMPONENT

export const HabbitComponent = (props) => {
    console.log(props.habbitArray);

    // let screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
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
        </View>
    )
};


//RENDERS HABBIT

function SingleHabbitScreen (singleHabbitObject) {
    return (
        <View
              style={{flex: 1,
            width: Dimensions.get('window').width,
            backgroundColor: 'white'}}>
                
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
                        <Text style={styles.text}>You have {66 - singleHabbitObject.habbitDailyCount} days of repetition left to build this habit!</Text>
                        <Button
                            title="Checkin with Habbit"
                            onPress={singleHabbitObject.handleHabbitCheckin.bind(this, singleHabbitObject.habbitId)}
                        />
                        <Button
                            title="Add New Habbit"
                            onPress={singleHabbitObject.handleAddHabbitView.bind(this)}
                        />

                    </View>
                </View>
        </View>
    )
}
