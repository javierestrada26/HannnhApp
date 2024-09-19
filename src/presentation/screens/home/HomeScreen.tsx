import { useClerk, useUser } from '@clerk/clerk-expo';
import { Button, Text, View } from 'react-native'

export const HomeScreen = () => {
  const { signOut} = useClerk();
  return (
    <View>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  )
}
