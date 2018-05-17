import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ViewRecipeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ViewRecipeScreen</Text>
        <Text>View a Recipe here!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
