import { StyleSheet, View, ViewStyle, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useEffect } from 'react';

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
        { width, height, backgroundColor: 'rgba(13,18,30,0.5)',overflow: 'hidden' },
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
          colors={['transparent', 'rgba(13,18,30,0.25)', 'transparent']}
          start={{ x: 1, y: 1 }}
        ></LinearGradient>
      </Animated.View>
    </View>
  );
}
