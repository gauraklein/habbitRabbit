import React from 'react';
import { Button,TextInput, Text, View, Dimensions, Image } from 'react-native';
import { styles } from './AllHabbitStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export const AllHabbitComponent = (props) => {
    console.log(props);

    return(
        <View style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            // borderWidth: 2
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
                    // borderWidth: 3
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
            </LinearGradient>
        </View>
    )
}

const AllHabbitDisplay = (singleHabbitObject) => {
    console.log(singleHabbitObject)
    return (
        <View
              style={{flex: 1,
            width: Dimensions.get('window').width - 50,
            backgroundColor: '#edf5e1',
            marginBottom: 20,
            padding: 25,
            // borderWidth: 3,
            borderTopLeftRadius: 50,
            borderBottomLeftRadius: 50,
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: "space-between",
            // borderWidth: 5
        
            }}>
             
                   
                        
                            <Image 
                                style={styles.rabbitFace}
                                resizeMode="center"
                                    source={require('../../assets/happyRabbitFace.gif')} 
                            />
                         
                 
                        
                        <View style={{flex: 1,
                            margin: 20
                        }}>
                            <Text style={styles.largeText}>
                                {singleHabbitObject.habbit}
                            </Text>

                            <Text style={styles.text}>
                                {66 - singleHabbitObject.habbitDailyCount} days left
                            </Text>
                        </View> 
                        
                        <View>
                            
                        </View>   
                    
           
        </View>
    )
}