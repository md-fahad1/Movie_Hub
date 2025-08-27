import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";
interface Props {
  placeholder: string;
  onPress: () => void;
}

const Searchbar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-4 py-3">
      {/* Search Icon */}
      <Ionicons
        name="search"
        size={20}
        color="gray"
        style={{ marginRight: 8 }}
      />

      {/* Input */}
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        placeholderTextColor="gray"
        className="flex-1 text-white"
      />
    </View>
  );
};

export default Searchbar;
