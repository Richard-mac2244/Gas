import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CreateCarScreen extends React.Component {
  static navigationOptions = {
    title: 'Tell us about your car!',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text> Car details and more stack </Text>
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

export default CreateCarScreen;
