import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const Searchbar = ({ placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-4 py-3">
      <Ionicons
        name="search"
        size={20}
        color="gray"
        style={{ marginRight: 8 }}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="gray"
        className="flex-1 text-white"
      />
    </View>
  );
};

export default Searchbar;
