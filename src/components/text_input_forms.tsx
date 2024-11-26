import { Text, TextInput, View } from "react-native";
import { ModelInputText } from "@/src/models/model.text_input";

export default function TextInputForms({
    title,
    value,
    placeholder,
    onChangeText,
    isSecure = false,
}: ModelInputText) {
    return (
        <View className="gap-2.5">
            <Text
                className="text-white text-lg"
                style={{ fontFamily: "SpaceGrotesk-Regular" }}
            >
                {title}
            </Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={"#666666"}
                onChangeText={onChangeText}
                className="bg-mirage rounded-md py-3 px-4 text-white mb-4"
                secureTextEntry={isSecure}
                style={{ fontFamily: "SpaceGrotesk-Regular" }}
            />
        </View>
    );
}
