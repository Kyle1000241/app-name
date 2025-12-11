import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const students = [
    {id: "1", name: "Gabriel", surname: "Leonardo", age:"17"},
    {id: "2", name: "Fame", surname: "Lame", age:"34"},
    {id: "3", name: "Rome", surname: "Bone", age:"13"},
    {id: "4",name: "Roam", surname: "Loan", age:"10"},
    

];

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.intro}>List of Students</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={students}
        renderItem={({ item }) => {
          return (
            <Text style={styles.text}>
              {item.name} {item.surname} - {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
    text: {
        fontSize: 24,

    },
    intro: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#FF0000",
    }
});

export default ListScreen;