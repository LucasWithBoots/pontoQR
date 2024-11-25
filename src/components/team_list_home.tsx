import {Text, View} from "react-native";
import {Colors} from "@/src/style/theme"
import InfoUserTeamHome from "@/src/components/info_user_team_home";

export default function TeamListHome() {
    return (
        <View>
            <Text className="text-white text-3xl mb-4" style={{fontFamily: "SpaceGrotesk-Medium"}}>Team A</Text>
            <View style={{backgroundColor: Colors.shark}} className="rounded-xl px-10 py-8">
                <View className="flex-col gap-5">
                    <InfoUserTeamHome/>
                    <InfoUserTeamHome/>
                    <InfoUserTeamHome/>
                </View>
            </View>
        </View>
    )
}