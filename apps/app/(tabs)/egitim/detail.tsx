import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { Image } from 'expo-image';
import COLORS from '@/constants/colors';
import { educationItems } from '@/data/education';

export default function EducationDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = educationItems.find((e) => e.id === id);

  if (!item) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>İçerik bulunamadı.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: item.title }} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        testID="education-detail"
      >
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          contentFit="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.contentText}>{item.content}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    height: 240,
    backgroundColor: COLORS.cardBackground,
  },
  textContainer: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 26,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  errorText: {
    fontSize: 16,
    color: COLORS.textSecondary,
  },
});
