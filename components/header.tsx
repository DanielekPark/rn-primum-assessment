import React from "react";
import { Text, View, Pressable } from "react-native";

const Header = () => {
  return (
    <View className="bg-white mb-6 pb-4 pt-8 mx-auto flex items-center justify-between w-11/12 flex-row">
      <View className="">
        <Text className={`font-bold `}>Where in the world?</Text>
      </View>
      <Pressable className="px-4 py-2">
        <Text className="">Dark Mode</Text>
      </Pressable>
    </View>
  );
};

export default Header;
