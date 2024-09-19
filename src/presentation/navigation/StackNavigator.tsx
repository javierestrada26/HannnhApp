import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from '../screens/home/HomeScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';


export type RootStackParamList = {
    LoginScreen: undefined;
    Home: undefined;
}


const Stack = createStackNavigator<RootStackParamList>();
export const StackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}