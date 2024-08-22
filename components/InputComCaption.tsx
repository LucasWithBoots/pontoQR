import { View, Text, TextInput } from "react-native";

export default function InputComCaption(props: any) {
  return (
    <View>
      <Text>{props.titulo}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        className="bg-white border-black border-2 rounded-md"
      />
    </View>
  );
}
