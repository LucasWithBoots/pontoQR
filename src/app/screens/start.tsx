import {Image, Text, View} from "react-native";
import React from "react";
import {StatusBar} from "expo-status-bar";
import MainButtonForms from "@/src/components/main_button_forms";
import {Link} from "expo-router";

export default function StartScreen() {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true}/>
            <View className="flex-1 ">
                <Image source={require("@/assets/images/photo_top.png")}/>
                <View className="mt-16 flex-col gap-10">
                    <Text className="text-white text-4xl text-center"
                          style={{fontFamily: 'SpaceGrotesk-Bold'}}>Hello, welcome!</Text>
                    <MainButtonForms text={"Sign up"} href={"./signup"}/>
                    <Text className="text-white text-xl text-center"
                          style={{fontFamily: 'SpaceGrotesk-Medium'}}>Already have an account? <Link
                        href="./login" className="underline">Log in</Link></Text>
                </View>
            </View>
        </>
    )
}