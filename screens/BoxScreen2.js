import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () -> {
return (
<View style={{
flex:1,
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
alignContent: "stretch",
flexWrap: "wrap",
padding: 20,

}}
>
   <View
   style={{width: 50, height: 150, backgroundColor: "powderblue", margin: 20}}>
   </View>
   <View
   style={{width: 50, height: 150, backgroundColor: "skyblue", margin: 20}}>
   </View>
   <View
   style={{width: 50, height: 150, backgroundColor: "steelblue", marginBottom: 20}}>
   </View>
   <View
   style={{width: 50, height: 150, backgroundColor: "red", marginTop: 20}}>
   </View>
   <View
   style={{width: 50, height: 150, backgroundColor: "yellow", marginHorizontal: 20}}>
   </View>
   <View
   style={{width: 50, height: 150, backgroundColor: "green", marginHorizontal: 20}}>
   </View>
</View>
);
};

const styles = StyleSheet.create({});



export default BoxScreen;