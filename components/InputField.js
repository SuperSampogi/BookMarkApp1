// components/InputField.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputField = ({ value, onChangeText, placeholder, style }) => (
    <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
    />
);

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginVertical: 8,
        fontSize: 16,
    },
});

export default InputField;
