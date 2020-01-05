import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 9,
        backgroundColor: '#EAEAEA',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    },
    navContainer: {
        flex: 1
    },
    fullContainer: {
        flex: 1
    },
    text: {
        color: 'black'
    },
     /* Here, style the text of your button */
     customBtnText: {
        fontSize: 20,
        fontWeight: '400',
        color: "#fff",
    },

  /* Here, style the background of your button */
    customBtnBG: {
        marginTop: 40,
    backgroundColor: "#007aff",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
    }

});
