// screens/AddBookmarkScreen.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import InputField from '../components/InputField';
import { saveBookmark } from '../utils/storage';

const AddBookmarkScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSave = async () => {
        if (!title || !url) {
            alert('Both fields are required.');
            return;
        }
        await saveBookmark({ title, url });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <InputField
                value={title}
                onChangeText={setTitle}
                placeholder="Bookmark Title"
            />
            <InputField
                value={url}
                onChangeText={setUrl}
                placeholder="Bookmark URL"
            />
            <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
                Save Bookmark
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    saveButton: { marginTop: 16 },
});

export default AddBookmarkScreen;
