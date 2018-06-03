import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import CreateRecipeScreen from './CreateRecipeScreen.js';
import RecipeListScreen from './RecipeListScreen.js';
import ViewRecipeScreen from './ViewRecipeScreen.js';

const InnerStack = createStackNavigator({
  Home: HomeScreen,
  CreateRecipe: CreateRecipeScreen,
  RecipeList: RecipeListScreen,
  ViewRecipe: ViewRecipeScreen
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const RootDrawer = createDrawerNavigator({
  Stack: {
    screen: InnerStack,
    navigationOptions: {
      drawerLabel: <Hidden />
    }
  },
  Home: HomeScreen,
  CreateRecipe: CreateRecipeScreen,
  RecipeList: RecipeListScreen,
  ViewRecipe: ViewRecipeScreen
}, {
    initialRouteName: 'Stack',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
});

export default class App extends Component {
  render() {
    return (<RootDrawer />);
  }
}