import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function RadioInputForms({
    title,
    options,
    value, // Valor inicial selecionado
    onChangeValue,
}: {
    title: string;
    options: Array<{ label: string; value: string }>;
    value: string; // Valor selecionado atualmente
    onChangeValue: (value: string) => void;
}) {
    const handlePress = (selectedValue: string) => {
        onChangeValue(selectedValue); // Atualiza o estado no componente pai
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {options.map((option) => (
                <TouchableOpacity
                    key={option.value}
                    style={styles.optionContainer}
                    onPress={() => handlePress(option.value)}
                >
                    <View
                        style={[
                            styles.radioCircle,
                            value === option.value &&
                                styles.radioCircleSelected,
                        ]}
                    >
                        {value === option.value && (
                            <View style={styles.radioInnerCircle} />
                        )}
                    </View>
                    <Text style={styles.optionLabel}>{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        color: "white",
        fontSize: 18,
        marginBottom: 8,
        fontFamily: "SpaceGrotesk-Regular",
    },
    optionContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 8,
    },
    radioCircleSelected: {
        borderColor: "#00bfff", // Cor de destaque quando selecionado
    },
    radioInnerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#00bfff", // Cor do círculo interno quando selecionado
    },
    optionLabel: {
        color: "white",
        fontSize: 16,
    },
});
