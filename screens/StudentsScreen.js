import React from "react";
import { Text, View, StyleSheet} from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text  style={styles.text}>Students Screen</Text>
            <StudentDetails name="Kenan" image={require("./assets/Avatar-2.png")} description ="Lorem ipsum dolor sit amet" />
            <StudentDetails  name="Lolbit" image={require("./assets/Avatar-1.jpeg")} description ="Lorem ipsum dolor sit amet"/>
            <StudentDetails  name="Nano" image={require("./assets/Avatar-3.png")} description ="Lorem ipsum dolor sit amet"/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAligh: "center",
        fontSize: 20,
        marginVertical: 20
    }
});

export default StudentsScreen;