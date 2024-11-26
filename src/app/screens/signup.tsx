import { Text, View } from "react-native";
import TextInputForms from "@/src/components/text_input_forms";
import RadioInputForms from "@/src/components/radio_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import React, { useState } from "react";
import { registerUser } from "../../service/api/userService";
import Toast from "@/src/components/toast";

export default function SignUpScreen() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isBoss, setIsBoss] = useState(false);

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

    const handleSubmit = async () => {
        if (!name.trim() || !email.trim() || !password.trim()) {
            showToast("Please fill in all fields.", "warning");
            return;
        }

        setIsLoading(true);

        try {
            await registerUser({ name, email, password, isBoss });
            showToast("User created successfully!", "success");
        } catch (error) {
            console.log("testeeee");
            console.error("Erro ao criar usuário:", error);
            showToast("Error creating user. Please try again.", "error");
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
                    Create your account
                </Text>
                <View className="gap-5 mb-16">
                    <TextInputForms
                        title="Name"
                        placeholder="Your name"
                        value={name}
                        onChangeText={setName}
                        isSecure={false}
                    ></TextInputForms>
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
                    <RadioInputForms
                        title="Would you like to register as a boss?"
                        options={[
                            { label: "Yes", value: "yes" },
                            { label: "No", value: "no" },
                        ]}
                        value={isBoss ? "yes" : "no"}
                        onChangeValue={(value) => setIsBoss(value === "yes")}
                    />
                </View>
                <MainButtonForms
                    text={"Create account"}
                    href={"./signup"}
                    onPress={handleSubmit}
                />
            </View>
            <Toast
                message="Creating user..."
                situation="none"
                visible={isLoading}
                onClose={() =>{}}
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
