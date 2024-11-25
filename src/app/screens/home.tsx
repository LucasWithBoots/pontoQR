import {ScrollView, View} from "react-native";
import Header from "@/src/components/header";
import MainButtonFastActions from "@/src/components/main_button_fast_actions";
import TeamListHome from "@/src/components/team_list_home";

export default function HomeScreen() {
    return (
        <View>
            <Header title="Hi, Lucas!" subtitle="Sunday, November 24, 2024" height={250}/>
            <View className="gap-8">
                <ScrollView horizontal={true} style={{paddingVertical: 10}}>
                    <MainButtonFastActions text={"New Team"} color={"#6E44FF"} href={""}/>
                    <MainButtonFastActions text={"New QRCode"} color={"#B892FF"} href={"./only_boss/newqrcode"}/>
                    <MainButtonFastActions text={"Manage QRCodes"} color={"#003F88"} href={"./login"}/>
                    <MainButtonFastActions text={"View People"} color={"#0D1F2D"} href={"./login"}/>
                    <MainButtonFastActions text={"Manage Trams"} color={"#121631"} href={"./login"}/>
                </ScrollView>
                <View className="px-5">
                    <TeamListHome/>
                </View>
            </View>
        </View>
    )
}