import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="PhoneNumber" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
      <TextInput placeholder="ConfirmPassword" style={styles.input} secureTextEntry={true} />
      <TextInput placeholder="PurposeOfUse" style={styles.input} />
      <TextInput placeholder="ShipScale" style={styles.input} />
      <TextInput placeholder="ProductTypes" style={styles.input} />
      <Button title="Sign Up" onPress={() => { /* Handle sign-up logic here */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default RegisterScreen;
