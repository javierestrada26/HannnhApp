import { Button, Text, View,useWindowDimensions } from "react-native"
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";

WebBrowser.maybeCompleteAuthSession();


export const LoginScreen = () => {

  const {height} = useWindowDimensions();

  useWarmUpBrowser();

    //inicio de sesion con google
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    
    const  onPress =  useCallback(async () => {
      try {
        const { createdSessionId, setActive } =
         ( await startOAuthFlow()) ?? {};
   
        if (createdSessionId && setActive) {
          setActive({ session: createdSessionId });
        } else {
          
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    },[])

  return (
    <View>
      <Text style={{fontSize: 30, textAlign: "center", marginTop: height/2 - 100}}>Login</Text>
      <Button title="Login with Google" onPress={onPress} />
    </View>
  )
}
