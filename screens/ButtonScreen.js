import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const ButtonScreen = () => {
    let brojac=0;
    let counter=0;
    return(
        <View>
        <Text style = {styles.textStyle}>ButtonScreen</Text> 
        <Button 
        title="Click me"
        color="purple"
        onPress={()=>console.log("Dugme je kliknuto: ",brojac++)}
        />

        <TouchableOpacity
        style={styles.touchableButton}
         onPress={()=>console.log("TouchableOpacity kliknut: ",counter++)}>
            <Text style={styles.btnText}>Clickabilni text element</Text>
        </TouchableOpacity>


        </View>
    )

}

const styles = StyleSheet.create({
    textStyle:{
      textAlight: "center",
    marginTop: 10,
    fontSize: 16,
    marginBottom:10   
    },
    touchableButton:{
        backgroundColorL:"purple",
        marginVertical: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingVertical: 20
    },
    btnText:{
        color:"white",
        textAlight:"center",
        fontSize:25,
        fontWeight:"bold"

    }



});

export default ButtonScreen