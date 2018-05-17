import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class RecipeListScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
		<Text>RecipeListScreen</Text>
        <Text>View all your Recipes here!!!</Text>
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
