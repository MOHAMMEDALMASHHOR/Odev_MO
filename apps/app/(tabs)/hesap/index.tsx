import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Plus } from 'lucide-react-native';
import COLORS from '@/constants/colors';

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HabitTrackerScreen() {
  return (
    <View style={styles.container} testID="habit-tracker">
      <ScrollView style={styles.scrollView}>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            <View style={[styles.cell, styles.cellDay, styles.headerCell]}>
              <Text style={styles.headerText}>Gün</Text>
            </View>
            <View style={[styles.cell, styles.cellWide, styles.headerCell]}>
              <Text style={styles.headerText}>Uyanıkken</Text>
            </View>
            <View style={[styles.cell, styles.cellWide, styles.headerCell, styles.cellLast]}>
              <Text style={styles.headerText}>Uyurken</Text>
            </View>
          </View>

          {ROWS.map((day) => (
            <View key={day} style={styles.row}>
              <View style={[styles.cell, styles.cellDay]}>
                <Text style={styles.cellText}>{day}</Text>
              </View>
              <View style={[styles.cell, styles.cellWide]}>
                <Text style={styles.cellText}></Text>
              </View>
              <View style={[styles.cell, styles.cellWide, styles.cellLast]}>
                <Text style={styles.cellText}></Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.85}
        testID="fab-add"
      >
        <Plus size={28} color={COLORS.white} strokeWidth={3} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
  },
  table: {
    margin: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    overflow: 'hidden',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  headerCell: {
    paddingVertical: 14,
    backgroundColor: COLORS.cardBackground,
  },
  cell: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.borderLight,
  },
  cellDay: {
    width: 70,
  },
  cellWide: {
    flex: 1,
  },
  cellLast: {
    borderRightWidth: 0,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '600' as const,
    color: COLORS.text,
  },
  cellText: {
    fontSize: 15,
    color: COLORS.text,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});
