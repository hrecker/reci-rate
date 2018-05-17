import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CreateRecipeScreen from './CreateRecipeScreen.js';
import RecipeListScreen from './RecipeListScreen.js';
import ViewRecipeScreen from './ViewRecipeScreen.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome!!!!!!',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
		<Text>HomeScreen</Text>
        <Text>Do whatever here!!!</Text>
		<Button
			title="Go create a recipe!"
			onPress={() =>
			  navigate('CreateRecipe')
			}
		/>
		<Button
			title="Go list your recipes!"
			onPress={() =>
			  navigate('RecipeList')
			}
		/>
		<Button
			title="Go view a recipe!"
			onPress={() =>
			  navigate('ViewRecipe')
			}
		/>
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
