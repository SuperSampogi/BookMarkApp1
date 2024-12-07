// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import BookmarkCard from '../components/BookmarkCard';
import { getBookmarks, deleteBookmark } from '../utils/storage';

const HomeScreen = ({ navigation }) => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const fetchBookmarks = async () => {
            const data = await getBookmarks();
            setBookmarks(data);
        };

        const unsubscribe = navigation.addListener('focus', fetchBookmarks);
        return unsubscribe;
    }, [navigation]);

    const handleDelete = async (index) => {
        await deleteBookmark(index);
        const updatedBookmarks = await getBookmarks();
        setBookmarks(updatedBookmarks);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={bookmarks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <BookmarkCard
                        title={item.title}
                        url={item.url}
                        onDelete={() => handleDelete(index)}
                    />
                )}
                ListEmptyComponent={<View><Text>No bookmarks yet!</Text></View>}
            />
            <Button
                mode="contained"
                style={styles.addButton}
                onPress={() => navigation.navigate('Add Bookmark')}
            >
                Add Bookmark
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    addButton: { margin: 16 },
});

export default HomeScreen;
