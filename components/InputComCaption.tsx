import { View, Text, TextInput } from "react-native";

export default function InputComCaption(props: any) {
  return (
    <View>
      <Text
        className="text-white"
        style={{ fontFamily: "SpaceGrotesk-Medium" }}
      >
        {props.titulo}
      </Text>
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={"#666666"}
        onChangeText={props.onChangeText}
        className="bg-jet border-black border-2 rounded-md py-3 px-4 text-white mb-4"
        style={{ fontFamily: "SpaceGrotesk-Regular" }}
      />
    </View>
  );
}
