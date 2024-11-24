import {Text, View} from "react-native";
import TextInputForms from "@/src/components/text_input_forms";
import RadioInputForms from "@/src/components/radio_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import React from "react";

export default function SignUpScreen() {
    return (
        <View className="mt-24 px-5">
            <Text className="text-white text-4xl mb-10" style={{fontFamily: 'SpaceGrotesk-Bold'}}>Create your
                account</Text>
            <View className="gap-5 mb-16">
                <TextInputForms title="Name" placeholder="Your name"></TextInputForms>
                <TextInputForms title="Email" placeholder="Your email"></TextInputForms>
                <TextInputForms title="Password" placeholder="Your password" isSecure={true}></TextInputForms>
                <RadioInputForms title="Would you like to register as a boss?" options={[
                    {label: "Yes", value: "yes"},
                    {label: "No", value: "no"},
                ]} onChangeValue={function (value: string): void {
                    throw new Error("Function not implemented.");
                }}/>
            </View>
            <MainButtonForms text={"Create account"} href={"./signup"}/>
        </View>
    )
}