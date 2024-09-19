import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import { MyIcon } from "../components/ui/MyIcon";
import { Text } from "react-native";


const Tab = createBottomTabNavigator();

export const TabNavigator = () =>{
    return(
        <Tab.Navigator
            
        >
            <Tab.Screen name="HomeScreen" component={StackNavigator}
                options={{
                    tabBarIcon:()=>(
                        <MyIcon name='home'/>
                    ),
                    tabBarLabel:({color})=>(
                        <Text style={{color:color,fontSize:13, marginTop:-7}}>Inicio</Text>
                    )
                }}
            />
        </Tab.Navigator>
    )
}