import { Href, Link } from "expo-router";
import { TouchableOpacity, Text, View } from "react-native";

export default function BotaoCriarQR({
  text,
  href,
}: {
  text: string;
  href: Href<string | object>;
}) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity className="h-20 rounded-lg justify-center pl-6 bg-maize mb-7">
        <View>
          <Text
            className="text-black text-lg"
            style={{ fontFamily: "SpaceGrotesk-Bold" }}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
