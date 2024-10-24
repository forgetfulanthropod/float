import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import Marker from '../map-components/marker';

type LocationType = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

const MapComponent: React.FC = () => {
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        // Request permissions for location
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }

        // Get the current position of the user
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.error('Failed to get location:', error);
      }
    };

    getLocation();
  }, []); // Empty dependency array means this useEffect will run once when the component mounts

  if (!location) {
    return <Text>Loading map...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          title="YOU ARE HERE"
          coordinate={location.coords}
        ></Marker>
        {/* <Marker
          title="YOU ARE HERE"
          coordinate={location.coords}
        >
          <View style={{ padding: 10 }}>
            <Image 
              source={require('@/assets/images/wheel.png')}
              style={{
                width: 50, // Set your desired width
                height: 50, // Set your desired height
                borderRadius: 50, // Half of width/height for a circular image, adjust for different shapes
              }} />
          </View>
        </Marker> */}
        {/* <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            image={require('@/assets/images/wheel.png')}
            title="You are here"
          /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapComponent;