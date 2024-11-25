import {View} from "react-native";
import "@/src/style/global.css"
import {Link, SplashScreen} from "expo-router";
import React, {useEffect} from "react";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";

export default function Index() {
    const [loaded, error] = useFonts({
        'SpaceGrotesk-Bold': require('@/assets/fonts/SpaceGrotesk-Bold.otf'),
        'SpaceGrotesk-Light': require('@/assets/fonts/SpaceGrotesk-Light.otf'),
        'SpaceGrotesk-Medium': require('@/assets/fonts/SpaceGrotesk-Medium.otf'),
        'SpaceGrotesk-Regular': require('@/assets/fonts/SpaceGrotesk-Regular.otf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link className="text-white" href="/screens/start">teste</Link>
                <Link className="text-white" href="/screens/home">home</Link>
            </View>
        </>
    );
}
