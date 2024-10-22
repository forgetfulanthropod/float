import React, { memo } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Marker as MapMarker } from 'react-native-maps';
import type { LatLng } from 'react-native-maps';

// Define the props for our custom Marker component
interface MarkerProps {
  coordinate: LatLng;
  title?: string;
  description?: string;
  // Add other props like onPress, if needed
}

const CustomMarker: React.FC<MarkerProps> = memo(({ coordinate, title = "Marker", description }) => {
  return (
    <MapMarker coordinate={coordinate} title={title} description={description} tracksViewChanges={true}>
      <View style={styles.markerContainer}>
        <Image 
          source={require('@/assets/images/wheel.png')} 
          style={styles.imageStyle} 
        />
        <Text style={styles.textStyle}>YOU ARE HERE</Text>
      </View>
    </MapMarker>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function to check if props have changed
  return (
    prevProps.coordinate.latitude === nextProps.coordinate.latitude &&
    prevProps.coordinate.longitude === nextProps.coordinate.longitude &&
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description
  );
});

const styles = StyleSheet.create({
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    // borderRadius: 25, // Assuming you want a circular marker
    // borderWidth: 2,
    // borderColor: 'blue',
    // overflow: 'hidden', // Ensures the image corners are hidden if it's not circular
    padding: 5,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25, // Half of width/height for a circular image
  },
  textStyle: {
    fontSize: 12,
    color: 'black',
    marginTop: 2,
  },
});

export default CustomMarker;