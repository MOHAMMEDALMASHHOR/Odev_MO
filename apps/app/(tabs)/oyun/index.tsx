import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import COLORS from '@/constants/colors';
import { gameItems } from '@/data/education';

export default function GameScreen() {
  return (
    <FlatList
      data={gameItems}
      keyExtractor={(item) => item.id}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      testID="game-list"
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          testID={`game-card-${item.id}`}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            contentFit="cover"
          />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    padding: 16,
    gap: 14,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.borderLight,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 120,
    height: 90,
    backgroundColor: COLORS.cardBackground,
  },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700' as const,
    color: COLORS.text,
  },
});
