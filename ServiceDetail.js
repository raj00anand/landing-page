import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const ServiceDetail = ({ route }) => {
  const { service } = route.params;
  const animatableRef = useRef(null);

  useEffect(() => {
    if (animatableRef.current) {
      animatableRef.current.animate('fadeInUp');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View ref={animatableRef} style={styles.wrapper} animation="fadeIn" duration={1000}>
        <View style={styles.container}>
          <Image source={service.thumbnail} style={styles.thumbnail} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{service.title}</Text>
            <Text style={styles.price}>{service.price}</Text>
            <Text style={styles.description}>{service.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#60efff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ServiceDetail;