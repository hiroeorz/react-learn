import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
//import Alert from 'react-native-alert';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>


        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.handlePress()}>
          ボタンです
        </Button>
      </View>
    );
  }

  handlePress() {
    console.log('Pressed!');
//    Alert.alert("あらーと", "ボタンが押されました！",
//    [
//      {text: "OK", onPress: () => { console.log("おされた") }}
//    ]);
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
