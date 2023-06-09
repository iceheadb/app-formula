import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Loading } from './Loading';

const SearchButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="search" size={20} color="#333" />
    </TouchableOpacity>
  );
};

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSearching(false);
    }, 3000);
  };

  return (
    <>
      {!loading && (
        <View style={{ alignItems: 'flex-start', position: 'relative' }}>
          <Text style={styles.Text}>
            Pesquise por marca ou fórmula</Text>
          <Text style={{ fontSize: 10, color: "#ccc", padding: 8, right: 50 }}>
            Ex.: Dipirona, etc...</Text>
        </View>
      )}
      {!loading && (
        <View style={styles.container}>
         {!searching && (
          <>
            <TextInput
              placeholder="Pesquisar"
              style={styles.input}
              />
              <SearchButton onPress={handleSearch} />
            </>
          )}
        </View>
      )}
      {loading && <Loading />}
    </>
  );
};



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
  Text: {
    fontSize: 20,
    color: "#fefefe",
    padding: 8,
  },
});

export default SearchBar;
