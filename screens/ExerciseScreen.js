import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

// JSX - Next Generation JavaScript

const ExcerciseScreen = () => {
  // Deklaracija varijable koristeći let
  let message = "Hi there!";

  // Dodjela nove vrijednosti
  message = "Hi there from Digital School";

  return (
    <View>
      <Text style={styles.bigText}>{message}</Text>
      <Text>Drugi tekst </Text>
       <Button 
               title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  bigText: {
    fontSize: 24,
  },
});

export default ExcerciseScreen;