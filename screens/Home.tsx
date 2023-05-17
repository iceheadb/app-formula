import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import { ResponseBox } from '../components/ResponseBox';

export function Home(){
    return (
        <View style={styles.container}>
            <SearchBar />
            <ResponseBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
