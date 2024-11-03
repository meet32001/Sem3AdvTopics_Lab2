import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TransactionDetailScreen({ route }) {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction Details</Text>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailValue}>{transaction.name}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detailValue}>{transaction.amount}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Date:</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Details:</Text>
        <Text style={styles.detailValue}>{transaction.details}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',  // Changed to white for a cleaner look
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5D3FD3',  // Bright purple for the title
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#F9F9F9',  // Light gray for the detail items
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',  // Dark color for labels
  },
  detailValue: {
    fontSize: 16,
    color: '#1A1A1A',  // Slightly darker for better contrast
  },
});

export default TransactionDetailScreen;
