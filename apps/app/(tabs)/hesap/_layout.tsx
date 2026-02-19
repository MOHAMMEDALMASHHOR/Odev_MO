import React from 'react';
import { Stack } from 'expo-router';
import COLORS from '@/constants/colors';

export default function HesapLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: '600' as const,
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'İşeme Günlüğü',
        }}
      />
    </Stack>
  );
}
