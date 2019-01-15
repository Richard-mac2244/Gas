import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class HomeScreen extends React.Component {


  /*signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth")
  };*/

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{
            height:58, backgroundColor:"white",
            borderBottomWidth: 1, borderBottomColor:'white'
          }}>
            <View style={{flexDirection:'row', padding: 13, backgroundColor:'white',
            marginHorizontal: 18, shadowOffset:{width:1.5, height:1.5}, shadowColor:'grey',
            shadowOpacity:0.5
            }}>

              <Icon name = "ios-search" size = {20} style={{marginRight:20}}/>
              <TextInput
              placeholder = "Find nearby gas stations"
              placeholderTextColor = "grey"
              onChangeText={(text) => this.setState({text})}
              style={{flex:1, fontWeight:'400', backgroundColor:'white'}}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
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

export default HomeScreen;
