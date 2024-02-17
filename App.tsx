import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://4d0d38cd5d49dbdd5047062a34e716c1@sentry.vitrion.dev/50',
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});
 function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start wor CRASHking on your app!</Text>
        <Button title="Press me" onPress={() => { throw new Error('Hello, again, Sentry!'); }}/>

        <StatusBar style="auto" />
    </View>
  );
}
export default Sentry.wrap(App);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
