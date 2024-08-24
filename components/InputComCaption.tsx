import { ModelInput } from "@/models/model.input";
import { View, Text, TextInput } from "react-native";

export default function InputComCaption({
  titulo,
  value,
  placeholder,
  onChangeText,
}: ModelInput) {
  return (
    <View>
      <Text
        className="text-white"
        style={{ fontFamily: "SpaceGrotesk-Medium" }}
      >
        {titulo}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#666666"}
        onChangeText={onChangeText}
        className="bg-jet border-black border-2 rounded-md py-3 px-4 text-white mb-4"
        style={{ fontFamily: "SpaceGrotesk-Regular" }}
      />
    </View>
  );
}
