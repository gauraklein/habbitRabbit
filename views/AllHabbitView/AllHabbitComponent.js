import React from 'react';
import { Button,TextInput, Text, View, Dimensions, Image } from 'react-native';
import { styles } from './AllHabbitStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";
import { ScrollView } from 'react-native-gesture-handler';

export const AllHabbitComponent = (props) => {
    console.log(props);

    return(
        <View style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width
            // borderWidth: 2
        }}>
            <View style={styles.notNavContainer}>

                {/* <View style={styles.container}>
                    
                </View> */}
                
                {/// TOP TITLE AREA \\\
                }

                <View style={{
                    flex: 1,
                    marginTop: 80,
                    marginLeft: 20
                }}>
                    <Text style={styles.largeText}>
                        Your Habbits
                    </Text>
                </View> 

                {/// HABBIT AREA GOES HERE \\\
                }
                <View style={{
                    flex: 9,
                    alignItems: "flex-end",
                    borderWidth: 3
                }}>
                   
                    <ScrollView>
                        {props.habbitArray.map((singleHabbitObject) => {
                            return (
                                < AllHabbitDisplay
                                    {...singleHabbitObject}
                                    key={singleHabbitObject.habbitId.toString()}
                                    />
                            )
                        })}
                        
                    </ScrollView>
                </View>


            </View>


            <View style={styles.navContainer}>
                < NavBar {...props}/>
            </View>
        </View>
    )
}

const AllHabbitDisplay = (singleHabbitObject) => {
    console.log(singleHabbitObject)
    return (
        <View
              style={{flex: 1,
            width: Dimensions.get('window').width - 50,
            backgroundColor: 'green',
            marginBottom: 20,
            padding: 25,
            // borderWidth: 3,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 5
        
            }}>
                
                <View>
                    <View style={{width: 100,
                    borderWidth: 2}}>
                        <Image 
                            style={styles.rabbitFace}
                                source={require('../../assets/happyRabbitFace.gif')} 
                        />
                    </View>
                    
                    <View style={{flex: 1,
                    width: 100,
                    borderWidth: 2
                    }}>
                        <Text style={styles.largeText}>
                            {singleHabbitObject.habbit}
                        </Text>
                    </View> 
                    <View>
                        
                    </View>   
                </View>
        </View>
    )
}