import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import COLORS from '@/constants/colors';

export default function WelcomeScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const buttonFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(buttonFade, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handlePress = (type: 'parent' | 'child') => {
    if (type === 'parent') {
      router.push('/(tabs)/egitim' as never);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <Animated.View
        style={[
          styles.mascotContainer,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=300&h=350&fit=crop' }}
          style={styles.mascotImage}
          contentFit="contain"
        />
      </Animated.View>

      <Animated.View style={[styles.buttonContainer, { opacity: buttonFade }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('parent')}
          activeOpacity={0.8}
          testID="btn-ebeveyn"
        >
          <Text style={styles.buttonText}>Ebeveyn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => handlePress('child')}
          activeOpacity={0.8}
          testID="btn-cocuk"
        >
          <Text style={styles.buttonText}>Çocuk</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  mascotContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '55%' as const,
    width: '100%',
  },
  mascotImage: {
    width: 220,
    height: 280,
    borderRadius: 16,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 60,
    gap: 14,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: COLORS.primaryDark,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '600' as const,
  },
});
