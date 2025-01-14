import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function HelpAndSupport() {
  const handleContactUs = () => Alert.alert('Contact Us', 'Email us at vendme2025@gmail.com');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.content}>
        For any issues or queries, please contact us at vendme2025@gmail.com or call +977-9841229070.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleContactUs}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, textAlign: 'center', lineHeight: 24, marginBottom: 20 },
  button: { backgroundColor: 'cornflowerblue', padding: 10, borderRadius: 10 },
  buttonText: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});
