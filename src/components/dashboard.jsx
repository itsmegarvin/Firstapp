import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons if not already installed

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.5.235:3000/api/products') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: NPR {item.price}</Text>
      <Text style={styles.productQuantity}>Available: {item.total_quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for products..."
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
        ListEmptyComponent={<Text style={styles.emptyText}>No products found.</Text>}
      />
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate('ScanToPay')}
      >
        <Ionicons name="scan" size={24} color="#fff" />
        <Text style={styles.buttonText}>Scan to Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f8f9fa' },
  searchBar: {
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  productCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  productPrice: { fontSize: 16, color: 'cornflowerblue' },
  productQuantity: { fontSize: 14, color: '#6c757d' },
  scanButton: {
    position: 'absolute',
    bottom: 15, // Position above the tab navigation
    right: 20, // Position to the right
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornflowerblue',
    padding: 12,
    borderRadius: 30, // Makes the button circular
    elevation: 5, // Adds shadow for better UI
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8, // Space between icon and text
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6c757d',
    marginTop: 20,
  },
});
