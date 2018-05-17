import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import CreateRecipeScreen from './CreateRecipeScreen.js';
import RecipeListScreen from './RecipeListScreen.js';
import ViewRecipeScreen from './ViewRecipeScreen.js';

const RootStack = createDrawerNavigator({
  Home: HomeScreen,
  CreateRecipe: CreateRecipeScreen,
  RecipeList: RecipeListScreen,
  ViewRecipe: ViewRecipeScreen,
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export default class App extends Component {
  render() {
    return (<RootStack />);
  }
}