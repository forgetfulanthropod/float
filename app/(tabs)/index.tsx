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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Float is a tool for riding.</ThemedText>
        <ThemedText>
          When you share your location, only close friends can see.
        </ThemedText>
        <ThemedText>
          They can follow your ride in real time, seeing your path for the past 10 minutes of riding, or rewind it.
        </ThemedText>
        <ThemedText>
          You can set a meetup location and see who's on the way.
        </ThemedText>
        <ThemedText>
          connect with friends
        </ThemedText>
        <ThemedText>
          join a group
        </ThemedText>
        <ThemedText>
          schedule a ride
        </ThemedText>
        <ThemedText>
          share a ride
        </ThemedText>
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
