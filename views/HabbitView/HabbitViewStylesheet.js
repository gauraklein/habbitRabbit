import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rabbitContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        // backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ddd',
        // borderWidth : 1,
        // borderColor: '#F44336',  // Set border Hex Color code here. 
        borderRadius: 10  // Set border Radius.
       
    },
    navContainer: {
        flex: 1
    },
    fullContainer: {
        flex: 9,

    },
    text: {
        color: 'black'
    },
    largeText: {
        color: 'black',
        fontSize: 25,
        fontWeight: "bold"
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    }

});
