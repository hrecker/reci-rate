import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import CreateRecipeScreen from './CreateRecipeScreen.js';
import RecipeListScreen from './RecipeListScreen.js';
import ViewRecipeScreen from './ViewRecipeScreen.js';

const RootStack = createStackNavigator({
	Home: HomeScreen,
	CreateRecipe: CreateRecipeScreen,
	RecipeList: RecipeListScreen,
	ViewRecipe: ViewRecipeScreen,
},
{
	initialRouteName: 'Home',
});

export default class App extends Component {
	render() {
		return <RootStack />;
	}
}