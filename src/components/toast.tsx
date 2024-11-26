import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";

type Situation = "success" | "error" | "warning";

export default function Toast({
    message,
    situation,
    visible,
    onClose,
}: {
    message: string;
    situation: Situation;
    visible: boolean;
    onClose: () => void;
}) {
    const translateY = useRef(new Animated.Value(100)).current; // Inicialmente fora da tela

    useEffect(() => {
        if (visible) {
            // Animação de entrada
            Animated.timing(translateY, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Desaparece após 3 segundos
            const timeout = setTimeout(() => {
                Animated.timing(translateY, {
                    toValue: 100,
                    duration: 300,
                    useNativeDriver: true,
                }).start(() => {
                    onClose(); // Fecha o Toast
                });
            }, 3000);

            return () => clearTimeout(timeout); // Limpa timeout quando o componente desmonta
        }
    }, [visible]);

    if (!visible) {
        // Se não estiver visível, não renderiza nada
        return null;
    }

    let color;
    if (situation === "success") {
        color = "rgba(112, 208, 83, 0.4)";
    } else if (situation === "error") {
        color = "rgba(255, 0, 4, 0.4)";
    } else {
        color = "rgba(234, 240, 65, 0.4)";
    }

    return (
        <Animated.View
            style={{
                transform: [{ translateY }],
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                padding: 16,
                backgroundColor: color,
                borderRadius: 10,
                justifyContent: "center",
            }}
        >
            <Text
                style={{
                    color: "white",
                    fontFamily: "SpaceGrotesk-Medium",
                }}
            >
                {message}
            </Text>
        </Animated.View>
    );
}
