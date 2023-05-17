import { StyleSheet, StatusBar, View } from 'react-native';
import { Home } from './screens/Home';
import { Header } from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16357a'
  }
});
