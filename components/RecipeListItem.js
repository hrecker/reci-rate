import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';

export default class RecipeListItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.recipe);
    console.log(this.props.recipe.name);
    console.log(this.props.recipe.text);
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemTitle}>{this.props.recipe.name}</Text>
        <Text numberOfLines={1} style={styles.listItemText}>{this.props.recipe.text}</Text>
        <TouchableHighlight onPress={this.props.onRecipeDelete}>
          <Image style={styles.listItemAction} source={require('../icons/baseline-close-black-18/baseline_close_black_18dp.png')} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomColor: '#eee',
    borderColor: 'gray',
    borderWidth: 1,
    padding:20
  },
  listItemTitle: {
    fontSize: 16,
  },
  listItemText: {
    fontSize: 12,
  },
  listItemAction: {
    width: 20,
    height: 20
  },
})