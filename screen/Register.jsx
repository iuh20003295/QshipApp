// import React from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import Picker from '@react-native-picker/picker';
// const RegisterScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Register</Text>
//       <TextInput placeholder="Username" style={styles.input} />
//       <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
//       <TextInput placeholder="PhoneNumber" style={styles.input} keyboardType="phone-pad" />
//       <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
//       <TextInput placeholder="ConfirmPassword" style={styles.input} secureTextEntry={true} />
//       <TextInput placeholder="PurposeOfUse" style={styles.input} />
//       <Picker selectedValue={"chon"}
//         style={styles.picker}>
//         <Picker.Item label="Chọn" value="chon" />
//         <Picker.Item label="Không thường xuyên" value="Không thường xuyên" />
//         <Picker.Item label="Dưới 100 đơn/tháng" value="Dưới 100 đơn/tháng" />
//         <Picker.Item label="Trên 100 đơn/tháng" value="Trên 100 đơn/tháng" />
//       </Picker>
//       <TextInput placeholder="ShipScale" style={styles.input} />
//       <TextInput placeholder="ProductTypes" style={styles.input} />
//       <Button title="Sign Up" onPress={() => { /* Handle sign-up logic here */ }} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   header: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
// });

// export default RegisterScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const RegisterScreen = () => {
  const [open, setOpen] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState(null); // State to manage selected value
  const [items, setItems] = useState([
    { label: 'Chọn', value: 'chon' },
    { label: 'Không thường xuyên', value: 'Không thường xuyên' },
    { label: 'Dưới 100 đơn/tháng', value: 'Dưới 100 đơn/tháng' },
    { label: 'Trên 100 đơn/tháng', value: 'Trên 100 đơn/tháng' }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Register</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="PhoneNumber" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
      <TextInput placeholder="ConfirmPassword" style={styles.input} secureTextEntry={true} />

      <Text style={styles.label}>Purpose of Use</Text>
      <DropDownPicker
        open={open}
        value={selectedPurpose}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedPurpose}
        setItems={setItems}
        style={styles.dropdown}
        placeholder="Select an option"
        zIndex={5000}
        zIndexInverse={1000}
      />

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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  dropdown: {
    marginBottom: 10,
  },
});

export default RegisterScreen;
