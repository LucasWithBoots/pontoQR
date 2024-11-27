import { Text, View } from "react-native";
import TextInputForms from "@/src/components/text_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import React, { useState } from "react";
import Toast from "@/src/components/toast";
import { getUserData, loginUser } from "@/src/service/api/userService";
import { router } from "expo-router";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastSituation, setToastSituation] = useState<
        "success" | "error" | "warning"
    >("success");

    const showToast = (
        message: string,
        situation: "success" | "error" | "warning",
    ) => {
        setToastMessage(message);
        setToastSituation(situation);
        setToastVisible(true);
    };

    const handleSubmmit = async () => {
        if (!email.trim() || !password.trim()) {
            showToast("Please fill in all fields.", "warning");
            return;
        }

        setIsLoading(true);

        try {
            await loginUser({ email, password });
            showToast("User logged in successfully!", "success");
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
            <Toast
                message="Verifying user..."
                situation="none"
                visible={isLoading}
                onClose={() => {}}
            />
            <Toast
                message={toastMessage}
                situation={toastSituation}
                visible={toastVisible}
                onClose={() => setToastVisible(false)}
            />
        </>
    );
}
