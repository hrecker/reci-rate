import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import CreateRecipeScreen from './CreateRecipeScreen.js';
import RecipeListScreen from './RecipeListScreen.js';
import ViewRecipeScreen from './ViewRecipeScreen.js';

const App = StackNavigator ({
	Home: { screen: HomeScreen },
	CreateRecipe: { screen: CreateRecipeScreen },
	RecipeList: { screen: RecipeListScreen },
	ViewRecipe: { screen: ViewRecipeScreen },
	
});

export default App;