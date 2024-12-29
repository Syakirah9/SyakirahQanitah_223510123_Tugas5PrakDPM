import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, Appbar, Button, Card, Text } from 'react-native-paper';

const Stack = createStackNavigator();

// Halaman Beranda
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Beranda" />
      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Title title="Selamat Datang!!!" subtitle="Di tugas 5 Praktikum DPM Syakirah Qanitah" />
        <Card.Content>
          <Text>Ini adalah hasil tugas syakirah dengan menggunakan React Navigation dan React Native Paper.</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Details')}>Detail</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

// Halaman Detail
function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Detail" />
      </Appbar.Header>
      <Text style={styles.text}>Ini adalah halaman detail!</Text>
    </View>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    margin: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});
