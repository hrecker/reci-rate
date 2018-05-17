import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CreateRecipeScreen from './CreateRecipeScreen.js';
import RecipeListScreen from './RecipeListScreen.js';
import ViewRecipeScreen from './ViewRecipeScreen.js';

export default class HomeScreen extends Component {

	render() {
		const { push } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
				<Text>Do whatever here!!!</Text>
				<Button
					title="Go create a recipe!"
					onPress={() =>
						push('CreateRecipe')
					}
				/>
				<Button
					title="Go list your recipes!"
					onPress={() =>
						push('RecipeList')
					}
				/>
				<Button
					title="Go view a recipe!"
					onPress={() =>
						push('ViewRecipe')
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
