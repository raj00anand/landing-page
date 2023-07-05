import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Animated } from 'react-native';

const LandingPage = ({ navigation }) => {
  const titleAnimation = useRef(new Animated.Value(100)).current;
  const subtitleAnimation = useRef(new Animated.Value(100)).current;
  const buttonAnimation = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    animateElements();
  }, []);

  const animateElements = () => {
    const duration = 1000;

    Animated.timing(titleAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(subtitleAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      delay: duration,
    }).start();

    Animated.timing(buttonAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      delay: duration * 2,
    }).start();
  };

  const handleGetStarted = () => {
    navigation.navigate('ServiceList');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./thumbnails/landing.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Animated.Text style={[styles.title, { transform: [{ translateY: titleAnimation }] }]}>
          Welcome to The Grand Hotel
        </Animated.Text>
        <Animated.Text style={[styles.subtitle, { transform: [{ translateY: subtitleAnimation }] }]}>
          Discover and Book Amazing services
        </Animated.Text>
        <Animated.View style={[styles.buttonContainer, { transform: [{ translateY: buttonAnimation }] }]}>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPage;