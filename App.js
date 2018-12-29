import React from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default class App extends React.Component {
  
  _tikla(){
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(responseJson.title);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Aşagıdaki Butona tıkla !!</Text>
        <Button title='Tıkla' onPress={this._tikla}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
