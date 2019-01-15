import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';

class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account Settings',
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth")
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text> Account Settings. </Text>
        <Button title = "Sign Out" onPress={this.signOutAsync} />
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

export default AccountScreen;
