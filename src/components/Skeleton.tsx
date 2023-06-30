import { StyleSheet, View, ViewStyle, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect } from 'react';
import { useThemeStore } from '../store/ThemeStore';
import { THEME } from '../data/theme';

export default function Skeleton({
  width,
  height,
  style,
}: {
  width: number;
  height: number;
  style: ViewStyle;
}) {
  const translateX = useRef(new Animated.Value(-width)).current;

  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, [width]);
  return (
    <View
      style={[
        {
          width,
          height,
          backgroundColor: THEME[theme].card_bg_transparent,
          overflow: 'hidden',
        },
        style,
      ]}
    >
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [
            {
              translateX: translateX,
            },
          ],
        }}
      >
        <LinearGradient
          style={{ width: '100%', height: '100%' }}
          colors={['transparent', THEME[theme].stats_card_bg_transparent, 'transparent']}
          start={{ x: 1, y: 1 }}
        ></LinearGradient>
      </Animated.View>
    </View>
  );
}
