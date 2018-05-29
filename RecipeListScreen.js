import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import Layout from './components/Layout';
import RecipeListItem from './components/RecipeListItem';
import { recipeListRef } from './services/RecipeService.js'

export default class RecipeListScreen extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    this.state = {
      dataSource: dataSource
    };
  }

  listenForRecipes() {
    recipeListRef.on('value', (snapshot) => {
      var recipes = [];
      snapshot.forEach((child) => {
        recipes.push({
          _key: child.key,
          name: child.val().name,
          text: child.val().text
        })
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(recipes)
      })
    });
  }

  _renderItem(recipe) {
    const onRecipeDelete = () => {
      recipeListRef.child(recipe._key).remove()
    };
    return (
      <RecipeListItem recipe={recipe} onRecipeDelete={onRecipeDelete} />
    );
  }

  componentDidMount() {
    // start listening for firebase updates
    this.listenForRecipes();
  }

  render() {
    return (
      <Layout navigation={this.props.navigation}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Your Recipes
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderItem.bind(this)}
            style={styles.listView}/>
        </View>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listView: {
    flex: 1
  }
});