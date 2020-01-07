import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 9,
        // backgroundColor: '#ddd',
        // alignItems: 'center',
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
        padding: 5
    },
    customBtnText: {
        fontSize: 20,
        fontWeight: '400',
        color: "black",
        textAlign: "center",
        // borderWidth: 3,
        paddingHorizontal: 0
    },
    largeText: {
        color: 'black',
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        // flex: 1
    },

  /* Here, style the background of your button */
    customBtnBG: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#edf5e1",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    }

});
