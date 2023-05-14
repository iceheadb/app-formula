import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Loading } from './components/Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Loading />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16357a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fefefe',
  }
});
