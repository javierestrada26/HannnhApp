import './gesture-handler'
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from "expo-secure-store";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { StyleSheet, Text, View } from 'react-native';
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from '@env';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './src/presentation/navigation/TabNavigator';
import { LoginScreen } from './src/presentation/screens/auth/LoginScreen';


const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
        <SignedIn>
          <NavigationContainer>
            <TabNavigator/>
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <LoginScreen/>
        </SignedOut>

      </ClerkProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
