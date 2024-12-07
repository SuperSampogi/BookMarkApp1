// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save bookmark
export const saveBookmark = async (bookmark) => {
    try {
        const existingBookmarks = await getBookmarks();
        existingBookmarks.push(bookmark);
        await AsyncStorage.setItem('bookmarks', JSON.stringify(existingBookmarks));
    } catch (error) {
        console.error('Error saving bookmark', error);
    }
};

// Get all bookmarks
export const getBookmarks = async () => {
    try {
        const bookmarks = await AsyncStorage.getItem('bookmarks');
        return bookmarks ? JSON.parse(bookmarks) : [];
    } catch (error) {
        console.error('Error fetching bookmarks', error);
        return [];
    }
};

// Delete bookmark
export const deleteBookmark = async (index) => {
    try {
        const bookmarks = await getBookmarks();
        bookmarks.splice(index, 1);
        await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } catch (error) {
        console.error('Error deleting bookmark', error);
    }
};
