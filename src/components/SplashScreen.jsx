import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vendme</Text>
      <ActivityIndicator size="large" color="cornflowerblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'cornflowerblue' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
});

export default SplashScreen;
