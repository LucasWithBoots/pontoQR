import { useState } from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    FlatList,
} from "react-native";

export default function DropdownForms({
    title,
    placeholder,
    items,
}: {
    title: string;
    placeholder: string;
    items: Array<{ label: string; value: string }>;
}) {
    items = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{
        label: string;
        value: string;
    } | null>(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleItemPress = (item: any) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <View className="gap-2.5">
            <Text
                className="text-white text-lg"
                style={{ fontFamily: "SpaceGrotesk-Regular" }}
            >
                {title}
            </Text>
            {/* Selected Item */}
            <TouchableOpacity
                className="bg-mirage rounded-md py-3 px-4 text-white mb-4"
                onPress={toggleDropdown}
            >
                <Text
                    style={[
                        {
                            fontFamily: "SpaceGrotesk-Regular",
                            color: "#666666",
                        },
                        selectedItem ? { color: "#fff" } : {},
                    ]}
                >
                    {selectedItem ? selectedItem.label : placeholder}
                </Text>
            </TouchableOpacity>

            {/* Dropdown List */}
            {isOpen && (
                <View
                    style={{ backgroundColor: "#282E37" }}
                    className="rounded-md"
                >
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                className="p-3"
                                onPress={() => handleItemPress(item)}
                            >
                                <Text
                                    className="text-white"
                                    style={{
                                        fontFamily: "SpaceGrotesk-Regular",
                                    }}
                                >
                                    {item.label}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
}
