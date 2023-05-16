import React, {useEffect} from "react";
import { Text, View, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  darkMode: Boolean
  setDarkMode: Function
}

const Header = ({darkMode, setDarkMode}: Props) => {

  return (
    <View style={{backgroundColor: darkMode ? "#1f2d38" : "#fff"}} className="bg-white mb-6 pb-4 pt-8 mx-auto flex items-center justify-between w-11/12 flex-row">
      <View className="">
        <Text style={{color: darkMode ? "#fff" : '#000000'}} className={`font-bold`}>Where in the world?</Text>
      </View>
      <Pressable className="px-4 py-2" onPress={() => setDarkMode(!darkMode)}>
        <Text style={{color: darkMode ? "#fff" : '#000000'}} >
          <Icon name="moon" size={20} color={darkMode ? '#F8F8FF' : '#000000' } />  Dark Mode</Text>
      </Pressable>
    </View>
  );
};

export default Header;
