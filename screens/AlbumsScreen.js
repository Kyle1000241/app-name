import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

class AlbumsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/albums");
    const jsonData = await data.json();

    this.setState({
      albums: jsonData,
    });
  }

  render() {
    const { albums } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Albums Screen</Text>
        <Text style={styles.text}>Check out these albums</Text>

        <FlatList
          data={albums}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.userId}</Text>
              <Text style={styles.text}>{item.id}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000FF",
    paddingTop: 50,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#008000",
    textAlign: "center",
    marginBottom: 8,
  },

  text: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 20,
    color: "#880808",
  },
});

export default AlbumsScreen;
