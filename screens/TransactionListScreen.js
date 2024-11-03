import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';

const transactions = [
  { id: '1', name: 'Grocery', amount: '$50', date: '2024-10-01', details: 'Weekly grocery shopping at the local store.' },
  { id: '2', name: 'Rent', amount: '$500', date: '2024-10-05', details: 'Monthly rent payment for the apartment.' },
  { id: '3', name: 'Electricity Bill', amount: '$60', date: '2024-10-07', details: 'Electricity bill payment for September.' },
  { id: '4', name: 'Gasoline', amount: '$40', date: '2024-10-10', details: 'Gasoline purchase for the car.' },
  { id: '5', name: 'Internet Bill', amount: '$70', date: '2024-10-12', details: 'Monthly internet subscription payment.' },
  { id: '6', name: 'Dining Out', amount: '$80', date: '2024-10-14', details: 'Dinner at a restaurant with friends.' },
  { id: '7', name: 'Gym Membership', amount: '$45', date: '2024-10-15', details: 'Monthly gym membership fee.' },
  { id: '8', name: 'Shopping', amount: '$120', date: '2024-10-17', details: 'Shopping for clothing and accessories.' },
  { id: '9', name: 'Car Maintenance', amount: '$150', date: '2024-10-18', details: 'Oil change and tire rotation for the car.' },
  { id: '10', name: 'Movie Night', amount: '$30', date: '2024-10-20', details: 'Tickets for a movie with family.' },
  { id: '11', name: 'Insurance', amount: '$200', date: '2024-10-22', details: 'Monthly payment for health insurance.' },
  { id: '12', name: 'Book Purchase', amount: '$25', date: '2024-10-25', details: 'Purchase of a new novel from the bookstore.' },
  { id: '13', name: 'Gift', amount: '$60', date: '2024-10-27', details: 'Gift for a friend’s birthday.' },
  { id: '14', name: 'Concert Tickets', amount: '$100', date: '2024-10-30', details: 'Tickets for a concert event.' },
  { id: '15', name: 'Charity Donation', amount: '$50', date: '2024-10-31', details: 'Donation to a local charity organization.' },
];

function TransactionListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.transactionItem}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.transactionRow}>
              <Text style={styles.transactionName}>{item.name}</Text>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
            <Text style={styles.transactionDate}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9', // Bright background
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498DB', // Bright blue
  },
  transactionItem: {
    padding: 15,
    backgroundColor: '#FFDD57', // Bright yellow
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionName: {
    fontSize: 18,
    color: '#2C3E50', // Darker text color for contrast
  },
  transactionAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E74C3C', // Bright red
  },
  transactionDate: {
    marginTop: 5,
    color: '#7F8C8D', // Grey for softer contrast
  },
});

export default TransactionListScreen;