import { Text, TouchableOpacity, View } from "react-native";
import { useUser } from "../contexts/UserContext";
import { router } from "expo-router";

export default function LogoutButton() {
    const { user, setUser } = useUser();

    const makeLogout = () => {
        router.replace("./start");
        setUser(undefined);
    };

    return (
        <TouchableOpacity onPress={makeLogout}>
            <View>
                <Text
                    className="text-white text-2xl text-center pt-10"
                    style={{ fontFamily: "SpaceGrotesk-Bold" }}
                >
                    Logout
                </Text>
            </View>
        </TouchableOpacity>
    );
}
