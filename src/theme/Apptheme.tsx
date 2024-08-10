import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title:{
        color:"gold",
            textAlign:"center",
            fontSize:40,
            marginBottom:40,
            fontFamily:"Sans-serif"
    },

    background1:{
        backgroundColor:"rgb(62, 212, 222)",
        flex:1
    },

    background2:{
        justifyContent: 'center',
        padding: 20,
        backgroundColor:"rgb(62, 212, 222)",
        flex:1,
        
    },

    image: {
        width: 300,
        height: 300,
        marginBottom: 40,
        marginLeft:55,
      },
    
    text:{
        fontSize:20
    },
    
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,

    },

    resultado:{
        fontFamily:"Sans-serif",
        textAlign:"center",
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
    }
  });