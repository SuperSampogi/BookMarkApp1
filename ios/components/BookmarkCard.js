import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BookmarkCard = ({ bookmark, onDelete, onEdit }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{bookmark.title}</Text>
    <Text style={styles.url}>{bookmark.url}</Text>
    <View style={styles.buttonContainer}>
      <Button title="Edit" onPress={() => onEdit(bookmark)} />
      <Button title="Delete" onPress={() => onDelete(bookmark.id)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  url: {
    fontSize: 14,
    color: 'blue',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default BookmarkCard;
