import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class CreateAccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Create your account!',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text> Create account functions </Text>
        <Button title = "Create your car!" onPress = {() => this.props.navigation.navigate('CreateCar')} />
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

export default CreateAccountScreen;
