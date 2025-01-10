import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://192.168.101.7:3000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Price: NPR {item.price}</Text>
      <Text style={styles.productQuantity}>Available: {item.total_quantity}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={renderProduct}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f9fa'
  },
  productCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  productPrice: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 5
  },
  productQuantity: {
    fontSize: 14,
    color: '#6c757d'
  }
});

export default App;
