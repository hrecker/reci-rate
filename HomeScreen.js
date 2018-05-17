import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Layout from './components/Layout';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Layout navigation={this.props.navigation}>
        <View style={styles.container}>
          <Text>HomeScreen</Text>
          <Text>Do whatever here!!!</Text>
          <Button
            title="Go create a recipe!"
            onPress={() => navigate('CreateRecipe')}
          />
          <Button
            title="Go list your recipes!"
            onPress={() => navigate('RecipeList')}
          />
          <Button
            title="Go view a recipe!"
            onPress={() => navigate('ViewRecipe')}
          />
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
