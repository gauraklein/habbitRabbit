import React from 'react';
import { Button, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { styles } from './HabbitViewStylesheet'
import { NavBar} from "../../components/NavBar/NavBar";

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
        width: Dimensions.get('window').width}}>
            <View style={styles.container}>
                <Image source={require('../../assets/Rabbit.png')} />
                <Text style={styles.text}>RabbitGoesHere</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>{singleHabbitObject.habbit}</Text>
            </View>

            <View style={styles.container}>

                <View style={styles.container}>
                    <Text style={styles.text}>{singleHabbitObject.habbitDailyCount}</Text>
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
