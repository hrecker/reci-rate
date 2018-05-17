import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Layout from './components/Layout';

export default class CreateRecipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <View style={styles.container}>
          <Text>CreateRecipeScreen</Text>
          <Text>Create a Recipe here!!!</Text>
        </View>
      </Layout>
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
