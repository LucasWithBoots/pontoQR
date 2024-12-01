import { Text, View } from "react-native";
import TextInputForms from "@/src/components/text_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import React, { useEffect, useState } from "react";
import { getUserData, loginUser } from "@/src/service/api/userService";
import { router } from "expo-router";
import { useToaster } from "@/src/contexts/ToasterContext";
import { useUser } from "@/src/contexts/UserContext";

export default function LoginScreen() {
    const { showToast } = useToaster();
    const { user, setUser } = useUser();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            showToast("Verifying user...", "none");
        }
    }, [isLoading]);

    const handleSubmmit = async () => {
        if (!email.trim() || !password.trim()) {
            showToast("Please fill in all fields.", "warning");
            return;
        }

        setIsLoading(true);

        try {
            await loginUser({ email, password });
            showToast("User logged in successfully!", "success");
            const userDetails = await getUserData();
            setUser(userDetails);
            setTimeout(() => {
                router.replace("./home");
            }, 3000);
        } catch (error: any) {
            showToast(error.message, "error");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <View className="mt-24 px-5">
                <Text
                    className="text-white text-4xl mb-10"
                    style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                    Log in to your account
                </Text>
                <View className="gap-5 mb-16">
                    <TextInputForms
                        title="Email"
                        placeholder="Your email"
                        value={email}
                        onChangeText={setEmail}
                        isSecure={false}
                    ></TextInputForms>
                    <TextInputForms
                        title="Password"
                        placeholder="Your password"
                        value={password}
                        onChangeText={setPassword}
                        isSecure={true}
                    ></TextInputForms>
                </View>
                <MainButtonForms
                    text={"Login"}
                    href={"./login"}
                    onPress={handleSubmmit}
                />
            </View>
        </>
    );
}
