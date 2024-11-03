import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFDD57',  // Bright yellow header
        },
        headerTintColor: '#5D3FD3',  // Purple text for the header
        headerTitleAlign: 'center',  
        headerTitleStyle: {
          fontWeight: 'bold',  // Bold header title
          fontSize: 22,  // Larger title font size
        },
        headerBackTitleVisible: false, // Hide back button title
      }}
    >
      <Stack.Screen 
        name="TransactionList" 
        component={TransactionListScreen} 
        options={{ title: 'My Finance App' }} 
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Transaction Details' }} 
      />
    </Stack.Navigator>
  );
}

export default TransactionsStack;
