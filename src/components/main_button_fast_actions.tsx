import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Href, Link} from "expo-router";

export default function MainButtonFastActions({text, href, color}: { text: string; href: Href; color: string }) {
    return (
        <Link href={href} asChild>
            <TouchableOpacity className={`bg-eletric_violet rounded-lg justify-center`} style={styles.container}>
                <Text
                    className="text-white text-base text-center text-wrap"
                    style={{fontFamily: "SpaceGrotesk-Medium"}}
                >
                    {text}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 130
    },
});