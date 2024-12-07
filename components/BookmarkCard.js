// components/BookmarkCard.js
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, IconButton } from 'react-native-paper';

const BookmarkCard = ({ title, url, onDelete }) => (
    <Card style={styles.card}>
        <Card.Content>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.url}>{url}</Text>
        </Card.Content>
        <Card.Actions>
            <IconButton
                icon="delete"
                color="red"
                size={20}
                onPress={onDelete}
                accessibilityLabel="Delete Bookmark"
            />
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    card: { marginVertical: 8, marginHorizontal: 16 },
    title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
    url: { fontSize: 14, color: 'gray' },
});

export default BookmarkCard;
