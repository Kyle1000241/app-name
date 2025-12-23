import React from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";

const students = [
    {name: "Gabriel", surname: "Rocha", age:"17"},
    {name: "Ronald", surname: "Mcdonald", age:"34"},
    {name: "James", surname: "Jerome", age:"13"},
    {name: "Cindy", surname: "Dindy", age:"10"},
    

];

const ListScreen = (props) => {
  return (
    <View>
      <Text>List of Students</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(student) => student.name}
        data={students}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} {item.surname} - {item.age}
            </Text>
          );
        }}
      />
      <Button 
      title="Go back" onPress={() => props.navigation.navigate("List")}/>
    </View>
  );
};

const style = StyleSheet.create({});

export default ListScreen;