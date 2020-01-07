import React from 'react';
import { Image, Dimensions, TouchableOpacity, Button,TextInput, Text, View } from 'react-native';
import { styles } from './loginStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";
import { LinearGradient } from 'expo-linear-gradient';
import { AuthSession, Linking } from 'expo'
import * as WebBrowser from 'expo-web-browser'


export const LoginComponent = (props) => {
    console.log(props, 'from login page');

    return(
        <View style={{
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
          <View style={{
            flex: 9
          }}>
            <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }} >

                <Text 
                style={styles.largeText}>
                  Welcome to {"\n"}Habbit Rabbit!
                </Text>
                <Text
                  style={styles.text}>
                    The app that helps you create lasting habits!
                  </Text>

            </View>  

            <View
                style={{ flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  // borderWidth: 3  
                  
              }}>

                <Image
                style={{
                // flex: 1
                }}
                source={require('../../assets/RabbitFaceForIntro.gif')} />
            
            </View>    

            <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20
            }} >
               <TouchableOpacity
              style={styles.customBtnBG}
            onPress={props.handleAddHabbitView.bind(this)}>
              <Text 
              style={styles.customBtnText}>
                Add a Habbit Now!
              </Text>
            </TouchableOpacity>
            
            <Login />
            </View>

          </View>

          < NavBar {...props} />

          </LinearGradient>    
        </View>
    )
}

export default class Login extends React.Component {
    state = {
      authResult: {},
    };
  render() {
  if (this.state.authResult.type && this.state.authResult.type === 'success') {
      console.log(this.state.authResult, "auth result")
        return (
          <View >
              <Text>{`Hey there, user!`}</Text>
          </View>
        )
      } else {
        return (
          <View style={{
            flex: 1,

          }}>
            <TouchableOpacity
              style={styles.customBtnBG}
            onPress={this.handleOAuthLogin}>
              <Text 
              style={styles.customBtnText}>
                Login With Facebook
              </Text>
            </TouchableOpacity>
          </View>
        )
      }
    }
  handleRedirect = async event => {
      console.log('redirect has been handled by expo')
      WebBrowser.dismissBrowser()
  }
  handleOAuthLogin = async () => {
      // gets the app's deep link
      let redirectUrl = await Linking.getInitialURL()
      console.log(redirectUrl, "REDIRECTURL")
      // this should change depending on where the server is running
      let authUrl = `http://localhost:3000/auth/facebook`
  this.addLinkingListener()
  try {
     let authResult = await WebBrowser.openAuthSessionAsync(`http://localhost:3000/auth/facebook`, redirectUrl)
        await this.setState({ authResult: authResult })
      } catch (err) {
        console.log('ERROR:', err)
      }
  this.removeLinkingListener()
  }
  addLinkingListener = () => {
      console.log('add Linking Listener')
      Linking.addEventListener('url', this.handleRedirect)
  }
  removeLinkingListener = () => {
      console.log('linkingListenerbeingremoved')
      Linking.removeEventListener('url', this.handleRedirect)
  }
  }
