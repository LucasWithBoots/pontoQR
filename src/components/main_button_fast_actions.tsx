import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Href, Link } from "expo-router";
import { Colors } from "@/src/style/theme";

export default function MainButtonFastActions({
    text,
    href,
    color,
}: {
    text: string;
    href: Href;
    color: string;
}) {
    return (
        <Link href={href} asChild>
            <TouchableOpacity
                className={`rounded-lg justify-center`}
                style={{
                    height: 80,
                    width: 130,
                    backgroundColor: color,
                    marginHorizontal: 8,
                }}
            >
                <Text
                    className="text-white text-lg text-center text-wrap"
                    style={{ fontFamily: "SpaceGrotesk-Medium" }}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {},
});
