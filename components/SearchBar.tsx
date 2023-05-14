import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name="search" size={20} color="#333" />
    </TouchableOpacity>
  );
}

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Pesquisar"
        style={styles.input}
      />
      <SearchButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ccc',
    fontSize: 16,
    color: '#333',
    opacity: 0.7,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
  },
  button: {
    padding: 8,
  },
  'input:focus': {
    backgroundColor: '#f6f6f6',
    borderColor: '#2f90e4',
  },
  'input:hover': {
    backgroundColor: '#f6f6f6',
    borderColor: '#ccc',
  },
});

export default SearchBar;
