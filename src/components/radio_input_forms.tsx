import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";

export default function RadioInputForms({title, options, onChangeValue,}: {
    title: string;
    options: Array<{ label: string; value: string }>;
    onChangeValue: (value: string) => void;
}) {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handlePress = (value: string) => {
        setSelectedValue(value);
        onChangeValue(value);
    };

    return (
        <View>
            <Text
                className="text-white text-lg"
                style={{fontFamily: "SpaceGrotesk-Regular", marginBottom: 8}}
            >
                {title}
            </Text>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 14,
                    }}
                    onPress={() => handlePress(option.value)}
                >
                    <View
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 10,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: 8,
                        }}
                        className="bg-mirage"
                    >
                        {selectedValue === option.value && (
                            <View
                                style={{
                                    height: 10,
                                    width: 10,
                                    borderRadius: 5,
                                    backgroundColor: "white",
                                }}
                            />
                        )}
                    </View>
                    <Text style={{color: "white", fontSize: 16}}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
