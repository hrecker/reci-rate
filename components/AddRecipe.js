import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import { addRecipe } from '../services/RecipeService.js'

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      error: false
    }
  }
  
  handleSubmit = () => {
    addRecipe(this.state.name, this.state.text);
    Alert.alert('saved recipe successfully');
  }
  
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Recipe</Text>
        <Text style={styles.inputLabel}>Enter Recipe Name</Text>
        <TextInput
              style={styles.itemInput}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
        <Text style={styles.inputLabel}>Enter Recipe Text</Text>
        <TextInput
              style={styles.itemInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
        <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Add
              </Text>
            </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    padding: 30,
    justifyContent: 'center',
    borderWidth: 1,
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  inputLabel: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});