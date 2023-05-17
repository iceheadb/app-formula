import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function ResponseBox(){
    return (
        <View style={styles.container}>
                <Text style={styles.Title}>
                    Paco.
                </Text>
                <Text style={styles.subTitle}>Paracetamol + Codeina</Text>
                <Text style={styles.Text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quod sapiente doloribus exercitationem voluptatum repellendus sit veniam expedita qui molestiae maiores magnam saepe, accusamus eos odit? Quos facere nemo cumque.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      backgroundColor: '#fefefe',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 16,
      marginHorizontal: 16,
      marginBottom: 16,
      borderWidth: 4,
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
    Title: {
        fontSize: 28,
        color: "#333",
        position: "relative",
      },
    Text: {
      fontSize: 18,
      color: "#333",
    },
    subTitle: {
        fontSize: 18,
        color: "#333",
        padding: 8,
      },
});
  
  