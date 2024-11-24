import {Stack} from "expo-router";
import React from "react";

export default function RootLayout() {
    return (
        <Stack
            screenOptions={{
                contentStyle: {backgroundColor: "#131521"},
                headerShown: false,
            }}>
        </Stack>
    );
}
