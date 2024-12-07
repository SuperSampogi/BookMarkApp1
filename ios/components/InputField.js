import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ placeholder, value, onChangeText }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default InputField;
