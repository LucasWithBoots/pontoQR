import {Text, View} from "react-native";
import "@/src/style/global.css"

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="text-3xl">Edit app/index.tsx to edit this screen.</Text>
        </View>
    );
}
