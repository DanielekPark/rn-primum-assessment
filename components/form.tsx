import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Form = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View className="mx-auto w-11/12">
      <View className="border-2 pt-4 pb-4">
        <TextInput
          placeholder="Search for a country..."
          className="text-black bg-white block w-full rounded-lg pt-2 pb-2 text-sm font-medium"
        />
        <View className="mb-8 flex">
          <View className="mt-10">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
