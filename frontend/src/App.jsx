
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './app/(auth)/Auth';
import SignIn from './app/(auth)/Sign-in';
import SignUp from './app/(auth)/Sign-up';
import { useFonts } from 'expo-font'
import { useEffect } from "react";
import { SplashScreen, Slot } from 'expo-router'
import Reset from './app/(auth)/Reset'
const Stack = createNativeStackNavigator();
import ResetInfo from './app/(auth)/ResetInfo'
import Home from './app/(tabs)/Home'
SplashScreen.preventAutoHideAsync();
function App() {
  const [fontsLoaded, error] = useFonts({
    "Aqum2classic": require("./assets/fonts/Aqum2classic.otf"),
    "Aqum 2 Small caps": require("./assets/fonts/Aqum 2 Small caps.otf")
  })

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="reset"
          component={Reset}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="resetInfo"
          component={ResetInfo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


