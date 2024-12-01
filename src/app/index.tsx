import { View } from "react-native";
import "@/src/style/global.css";
import { Link } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Index() {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link className="text-white" href="/screens/start">
                    teste
                </Link>
                <Link className="text-white" href="/screens/home">
                    home
                </Link>
                <Link
                    className="text-white"
                    href="/screens/only_boss/qrcodecreated"
                >
                    showqrcode
                </Link>
            </View>
        </>
    );
}
