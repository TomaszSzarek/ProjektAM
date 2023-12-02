import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        backgroundColor: 'green',
        padding: '10%',
        alignItems: 'center',
        marginBottom: '5%',
        },
    textStyle1: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: '2%',
        marginLeft:'2%',
        flex: 1,
      },
      separator: {
        height: 1, 
        width:'90%',
        backgroundColor: 'green', 
        alignSelf: 'center',
        flex: 1,
      },
      textbutton : {
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 40,
        width: '80%',
        height: '10%',
        margin:'10%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
        borderColor: 'black',
      },
      textbuttoninPut : {
        flex:1,
        backgroundColor: 'lightgreen',
        width: '80%',
        height: '10%',
        borderRadius: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderWidth: 1, 
        borderColor: 'black',
      },
      text:{
        color: "white",
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        paddingLeft: 10,
        paddingRight: 8,
        width: '100%',
      },
});
