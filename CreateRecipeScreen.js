import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Layout from './components/Layout';
import AddRecipe from './components/AddRecipe';

export default class CreateRecipeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <KeyboardAvoidingView 
          style={styles.container}
          behavior="padding"
          enabled
        >
          <AddRecipe/>
        </KeyboardAvoidingView>
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
