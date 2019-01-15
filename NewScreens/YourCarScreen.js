import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

class YourCarScreen extends React.Component {
  static navigationOptions = {
    title: 'Your car',
  };

  handleClick() {
    Alert.alert("You clicked the button!")
  }

  render() {
    return (
      <View style = {styles.container}>
        <Button title = "hi" onPress = {this.handleClick} />
        <Text>Car</Text>
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

export default YourCarScreen;
