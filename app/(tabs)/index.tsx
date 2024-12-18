import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/esaddle.png')}
          style={styles.wheelHeader}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{fontSize: 100}}>Float</ThemedText>
        <ThemedText>Memorable Rides</ThemedText>
        <ThemedText>Record and remember your journey.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  wheelHeader: {
    // height: 178,
    width: '100%',
    bottom: -600,
    left: 0,
    position: 'absolute',
  },
});