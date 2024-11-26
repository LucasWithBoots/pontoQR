import { Href, Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function MainButtonForms({
    text,
    href,
    onPress,
}: {
    text: string;
    href: Href;
    onPress?: () => void;
}) {
    return (
        <Link href={href} asChild>
            <TouchableOpacity
                className="h-14 mx-14 rounded-lg justify-center bg-blue_ribbon"
                onPress={onPress}
            >
                <View>
                    <Text
                        className="text-white text-2xl text-center"
                        style={{ fontFamily: "SpaceGrotesk-Medium" }}
                    >
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
}
