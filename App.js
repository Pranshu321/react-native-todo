import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import ListItems from './components/ListItems';
import {Container} from './Styles';

export default function App() {
  return (
    <Container>
      <StatusBar style="light" />
      <Home />
    </Container>
  );
}

