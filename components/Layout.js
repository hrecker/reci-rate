import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  renderDrawerControl() {
    return (<Icon
      name='menu'
      color='#fff'
      underlayColor='#032254'
      onPress={() => this.props.navigation.openDrawer()}
    />);
  }

  renderHomeButton() {
    return (<Icon
      name='home'
      color='#fff'
      underlayColor='#032254'
      onPress={() => this.props.navigation.navigate('Home')}
    />)
  }

  render() {
    return (<View style={styles.container}>
      <Header
        backgroundColor='#063787'
        leftComponent={this.renderDrawerControl()}
        centerComponent={{ text: 'Reci-Rate', style: { color: '#fff' } }}
        rightComponent={this.renderHomeButton()}
        outerContainerStyles={styles.header}
      />
      <View style={styles.appContainer}>
        {this.props.children}
      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    paddingTop: 25
  },
  appContainer: {
    flex: 1,
  },
});