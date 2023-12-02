import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logowanie from './Logowanie';
import Odblokowanie from './Odblokowanie';
import Rej1 from './Rej1';
import Rej2 from './Rej2';
import Rej3 from './Rej3';
import Rej4 from './Rej4';
import Rej5 from './Rej5';
import Rej6 from './Rej6';
import Rej7 from './Rej7';
import Rej8 from './Rej8';
import Rej9 from './Rej9';
import Rej10 from './Rej10';
import Log1 from './Log1';
import Log2 from './Log2';
import Log3 from './Log3';
import TabNav from './src/navigation/Tab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Logowanie">
        <Stack.Screen name="Logowanie" options={{ headerShown: false }} component={Logowanie} />
        <Stack.Screen name="Odblokowanie" options={{ headerShown: false }} component={Odblokowanie} />
        <Stack.Screen name="Rej1" options={{ headerShown: false }} component={Rej1} />
        <Stack.Screen name="Rej2" options={{ headerShown: false }} component={Rej2} />
        <Stack.Screen name="Rej3" options={{ headerShown: false }} component={Rej3} />
        <Stack.Screen name="Rej4" options={{ headerShown: false }} component={Rej4} />
        <Stack.Screen name="Rej5" options={{ headerShown: false }} component={Rej5} />
        <Stack.Screen name="Rej6" options={{ headerShown: false }} component={Rej6} />
        <Stack.Screen name="Rej7" options={{ headerShown: false }} component={Rej7} />
        <Stack.Screen name="Rej8" options={{ headerShown: false }} component={Rej8} />
        <Stack.Screen name="Rej9" options={{ headerShown: false }} component={Rej9} />
        <Stack.Screen name="Rej10" options={{ headerShown: false }} component={Rej10} />
        <Stack.Screen name="Log1" options={{ headerShown: false }} component={Log1} />
        <Stack.Screen name="Log2" options={{ headerShown: false }} component={Log2} />
        <Stack.Screen name="Log3" options={{ headerShown: false }} component={Log3} />
        <Stack.Screen name="TabNav" options={{ headerShown: false }} component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}