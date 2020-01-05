import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    rabbitContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: 'white'
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
        flex: 1,
        backgroundColor: '#EAEAEA'
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
    },
     /* Here, style the text of your button */
     customBtnText: {
        fontSize: 20,
        fontWeight: '400',
        color: "#fff",
    },

  /* Here, style the background of your button */
    customBtnBG: {
        marginTop: 20,
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
    }

});
