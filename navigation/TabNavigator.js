import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './TransactionsStack';
import SummaryScreen from '../screens/SummaryScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5D3FD3',  // Changed to match the header color
        tabBarInactiveTintColor: '#BDC3C7', // Soft grey for inactive tab
        tabBarStyle: {
          backgroundColor: '#FFDD57',  // Bright yellow background
          borderTopWidth: 0, // Remove top border for a cleaner look
        },
        headerStyle: {
          backgroundColor: '#5D3FD3',  // Maintain the purple header background
        },
        headerTintColor: '#FFFFFF',  // White color for header text
        headerTitleAlign: 'center',  // Center the header title
      }}>

      <Tab.Screen 
        name="Transactions" 
        component={TransactionsStack} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" color={color} size={size} />
          ),
          headerShown: false,  // Hide the header for this screen
        }}
      />
      
      <Tab.Screen 
        name="MyFinanceApp" 
        component={SummaryScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" color={color} size={size} />
          ),
          headerTitleAlign: 'center',  // Center the header title
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
