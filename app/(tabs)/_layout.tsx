import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIconicon, TabBarIconEntypo } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="map-view"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconicon name={focused ? 'map' : 'map-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconEntypo name="chat" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Memories',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconEntypo name="back-in-time" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
