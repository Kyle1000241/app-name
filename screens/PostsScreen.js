import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

class PostsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <View>
        <Text>Posts Screen</Text>
        <FlatList
          keyExtractor={(posts) => posts.id}
          data={posts}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.id}</Text>
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await data.json();
    this.setState({
      posts: jsonData,
    });
  }
}

const styles = StyleSheet.create({});

export default PostsScreen;

