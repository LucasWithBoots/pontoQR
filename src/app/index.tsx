import "@/src/style/global.css";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import React, { useEffect } from "react";
import MainButtonForms from "@/src/components/main_button_forms";
import { Link, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { getUserData } from "../service/api/userService";
import { useUser } from "../contexts/UserContext";
import { useToaster } from "../contexts/ToasterContext";

export default function Index() {
    const { user, setUser } = useUser();
    const { showToast } = useToaster();

    useEffect(() => {
        const checkAuth = async () => {
            const token = await SecureStore.getItemAsync("jwtToken");

            if (token != null) {
                try {
                    const userDetails = await getUserData(token);
                    setUser(userDetails);
                    router.replace("./screens/home");
                    showToast(
                        "You were automatically logged in as your previous session is still active!",
                        "success",
                    );
                } catch (error) {
                    router.push("./screens/login");
                    showToast(
                        "Session expired. Please log in again to continue.",
                        "none",
                    );
                }
            }
        };

        checkAuth();
    }, []);

    return (
        <>
            <View className="flex-1 ">
                <Image source={require("@/assets/images/photo_top.png")} />
                <View className="mt-16 flex-col gap-10">
                    <Text
                        className="text-white text-4xl text-center"
                        style={{ fontFamily: "SpaceGrotesk-Bold" }}
                    >
                        Hello, welcome!
                    </Text>
                    <MainButtonForms
                        text={"Sign up"}
                        href={"./screens/signup"}
                    />
                    <Text
                        className="text-white text-xl text-center"
                        style={{ fontFamily: "SpaceGrotesk-Medium" }}
                    >
                        Already have an account?{" "}
                        <Link href="./screens/login" className="underline">
                            Log in
                        </Link>
                    </Text>
                </View>
            </View>
        </>
    );
}
