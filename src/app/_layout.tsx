import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { Colors } from "@/src/style/theme";
import { useFonts } from "expo-font";
import ContextUserProvider from "../contexts/UserContext";
import ToastProvider from "../contexts/ToasterContext";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    NavigationBar.setBackgroundColorAsync(Colors.vulcan);

    const [loaded, error] = useFonts({
        "SpaceGrotesk-Bold": require("@/assets/fonts/SpaceGrotesk-Bold.otf"),
        "SpaceGrotesk-Light": require("@/assets/fonts/SpaceGrotesk-Light.otf"),
        "SpaceGrotesk-Medium": require("@/assets/fonts/SpaceGrotesk-Medium.otf"),
        "SpaceGrotesk-Regular": require("@/assets/fonts/SpaceGrotesk-Regular.otf"),
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
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ToastProvider>
                <ContextUserProvider>
                    <Stack
                        screenOptions={{
                            contentStyle: { backgroundColor: "#131521" },
                            headerShown: false,
                        }}
                    ></Stack>
                </ContextUserProvider>
            </ToastProvider>
        </>
    );
}
