import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const NameScreen = () => {

    let firstName = "Kenan";
    let lastName = "Causevic";
    let birthday = "6/06/2008";

    const age = 17;

    return (
        <View>
          <Text style={styles.text}>First Name: {firstName}</Text> 
          <Text style={styles.text}>Last Name: {lastName}</Text> 
          <Text style={styles.text}>Birthday: {birthday}</Text> 
          <Text style={styles.text}>Age: {age}</Text> 
        </View>
      );
};


const styles =  StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#008000",
    }
});