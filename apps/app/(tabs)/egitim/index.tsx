import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronDown } from 'lucide-react-native';
import COLORS from '@/constants/colors';
import { educationItems } from '@/data/education';

export default function EducationListScreen() {
  const router = useRouter();

  const handleItemPress = useCallback(
    (id: string) => {
      router.push({ pathname: '/egitim/detail' as never, params: { id } });
    },
    [router]
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      testID="education-list"
    >
      {educationItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.listItem}
          onPress={() => handleItemPress(item.id)}
          activeOpacity={0.7}
          testID={`education-item-${item.id}`}
        >
          <Text style={styles.listItemText}>{item.title}</Text>
          <ChevronDown size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingVertical: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500' as const,
    lineHeight: 22,
    paddingRight: 12,
  },
});
