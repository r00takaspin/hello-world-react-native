/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorldNative extends Component {
  
  getRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)]
  }
  
  tick() {
      this.setState({
          who: this.getRandomName()
      })
  }
  
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 500);
  }
  
  constructor(props, context) {
    super(props, context)
    this.names = ["Зема", "Вася", "Приятель", "Пацан"]
    this.state = {
      who: this.getRandomName()
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Здарова, {this.state.who}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorldNative', () => HelloWorldNative);
