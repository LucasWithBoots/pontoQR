import {View} from "react-native";
import Header from "@/src/components/header";
import MainButtonFastActions from "@/src/components/main_button_fast_actions";

export default function HomeScreen() {
    return (
        <View className="">
            <Header title="Hi, Lucas!" subtitle="Sunday, November 24, 2024" height={250}/>
            <MainButtonFastActions text={"Criar Equipe"} color={"eletric_violet"} href={"./login"}/>
        </View>
    )
}