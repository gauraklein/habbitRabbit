import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 9,
        // backgroundColor: '#EAEAEA',
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
        color: 'black',
        fontSize: 20,
        textAlign: "center",
        marginHorizontal: 55
    },
     /* Here, style the text of your button */
     customBtnText: {
        fontSize: 20,
        fontWeight: '400',
        color: "black",
    },

  /* Here, style the background of your button */
    customBtnBG: {
        marginTop: 40,
    backgroundColor: "#edf5e1",
    paddingHorizontal: 50,
    paddingVertical: 25,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2
    }

});
