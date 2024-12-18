import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function MemoriesScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E8F8FF', dark: '#2E3440' }}
      headerImage={<Ionicons size={310} name="map-outline" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Journey Memories</ThemedText>
      </ThemedView>
      <ThemedText>Scroll through your past rides, and relive the moments that made them special.</ThemedText>
      <Collapsible title="Your Ride Timeline">
        <ThemedText>
          Dive into <ThemedText type="defaultSemiBold">your journey history</ThemedText>, where each ride tells a story. Swipe through to see how your adventures have evolved over time.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">New updates</ThemedText> will bring even more details from your trips, capturing the essence of each journey.
        </ThemedText>
        <ExternalLink href="https://example.com/app-feature-updates">
          <ThemedText type="link">Discover Upcoming Features</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Interactive Map Memories">
        <ThemedText>
          Use the interactive map to scrub along your ride routes. Each marker not only shows where you've been but also hints at the stories and sights you've encountered.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Photo Memories">
        <ThemedText>
          Remember those <ThemedText type="defaultSemiBold">photos taken during rides</ThemedText>? Here they are, ready for you to revisit. They're not just images; they're your captured moments on the go.
        </ThemedText>
        <Image source={require('@/assets/images/ride-memory.png')} style={{ alignSelf: 'center', width: 200, height: 200 }} />
        <ExternalLink href="https://example.com/share-your-story">
          <ThemedText type="link">Share Your Ride Stories</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Ride Insights">
        <ThemedText>
          Each ride provides insights, like <ThemedText type="defaultSemiBold">speed, distance, and unique stops</ThemedText>. These metrics help you track your progress and reminisce about each adventure.
        </ThemedText>
        <ExternalLink href="https://example.com/learn-data">
          <ThemedText type="link">Understand Your Ride Data</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Day & Night Modes">
        <ThemedText>
          Whether it's the <ThemedText type="defaultSemiBold">sunrise on an early ride</ThemedText> or <ThemedText type="defaultSemiBold">starlit journeys</ThemedText>, switch between themes to match your memory's time of day.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#5A95E0',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});