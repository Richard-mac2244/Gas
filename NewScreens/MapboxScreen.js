import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoicmljaGllcm9vb29vIiwiYSI6ImNqcWh2NTVvZTVzamgzeGxnMGIxazdyemkifQ.nupHvVcjhY5gGdH-RINIIA');

export default class App extends Component<{}> {
  renderAnnotations () {
    return (
      <Mapbox.PointAnnotation
        key='pointAnnotation'
        id='pointAnnotation'
        coordinate={[-121.953342,37.492712]}>

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout
          title='Hello!'

        />
      </Mapbox.PointAnnotation>
    )
  }

  render() {
    return (
      <View style={styles.container}>

          <View style={{flexDirection:'row', padding: 13, backgroundColor:'white',
          marginHorizontal: 18, shadowOffset:{width:1.5, height:1.5}, shadowColor:'grey',
          shadowOpacity:0.7, position: 'absolute', top: 70, borderRadius: 7, opacity:0.8
          }}>

            <Icon name = "ios-search" size = {20} style={{marginRight:20}}/>
            <TextInput
            placeholder = "Find nearby gas stations"
            placeholderTextColor = "grey"
            onChangeText={(text) => this.setState({text})}
            style={{flex:1, fontWeight:'400', backgroundColor:'white'}}
            />

        </View>
        <Mapbox.MapView
            styleURL={"mapbox://styles/richierooooo/cjqvi226t2mz62sp3aqxvzyw9"}
            zoomLevel={15}
            centerCoordinate={[-121.953578,37.490746]}
            style={styles.mapContainer}
            showUserLocation={true}
            compassEnabled={true}
            logoEnabled={false}>
            {this.renderAnnotations()}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapContainer: {
    flex:1,
    zIndex:-1,
  },

  textContainer: {
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'blue',
    opacity: 1,
    zIndex:10,
  },

  center: {
    flex:1,
    height:120,
    top: 40,
    opacity:0.4
  },

  annotationContainer: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
  },

  annotationFill: {
    width: 20,
    height: 20,
    borderRadius: 16,
    backgroundColor: 'orange',
    transform: [{ scale: 0.8 }],
  },
});
