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
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  /*setRecipeName(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  
  setRecipeText(e) {
    this.setState({
      text: e.nativeEvent.text
    });
  }*/
  
  handleSubmit() {
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
    //flex: 1,
    padding: 30,
    //flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fa6807'
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
    //borderColor: 'white',
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
    //borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});