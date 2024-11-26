import { Text, View } from "react-native";
import TextInputForms from "@/src/components/text_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import React from "react";

export default function LoginScreen() {
    return (
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
                ></TextInputForms>
                <TextInputForms
                    title="Password"
                    placeholder="Your password"
                    isSecure={true}
                ></TextInputForms>
            </View>
            <MainButtonForms text={"Login"} href={"./home"} />
        </View>
    );
}
