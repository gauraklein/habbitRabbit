import React from 'react';
import { TouchableOpacity, Button,TextInput, Text, View } from 'react-native';
import { styles } from './loginStylesheet'
import {NavBar} from "../../components/NavBar/NavBar";
import FBLoginButton from '../../components/FBLoginButton'
import { AuthSession, Linking } from 'expo'
import * as WebBrowser from 'expo-web-browser'


export const LoginComponent = (props) => {
    console.log(props, 'from login page');

    return(
        <View style={styles.container}>
            <Login />
            < NavBar {...props} />
        </View>
    )
}

async function loginWithFB() {
    await console.log('loginfunction')
    await fetch('http://localhost:3000/auth/facebook')
    await console.log('login function 2')

}

export default class Login extends React.Component {
    state = {
      authResult: {},
    };
  render() {
  if (this.state.authResult.type && this.state.authResult.type === 'success') {
      console.log(this.state.authResult, "auth result")
        return (
          <View style={styles.container}>
              <Text>{`Hey there, user!`}</Text>
          </View>
        )
      } else {
        return (
          <View style={styles.container}>
            <Button title="Login with Facebook" onPress={this.handleOAuthLogin} />
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
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   })