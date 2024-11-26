import { View } from "react-native";
import Header from "@/src/components/header";
import TextInputForms from "@/src/components/text_input_forms";
import MainButtonForms from "@/src/components/main_button_forms";
import DropdownForms from "@/src/components/dropdown_forms";

export default function Newqrcode() {
    return (
        <View>
            <Header title="Create new QRCode" height={170} />
            <View className="px-6 gap-5 mb-16">
                <DropdownForms title="Team" placeholder="Select a team" />
                <TextInputForms
                    title={"Location"}
                    placeholder={"Select a location"}
                />
                <TextInputForms
                    title={"Description"}
                    placeholder={"Write a description"}
                />
            </View>
            <MainButtonForms text={"Create"} href=".." />
        </View>
    );
}
