import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Pressable, 
  Text
} from "react-native";
import Header from "./components/header";
import CountriesList from "./components/countrieslist";
import Form from "./components/form";
import Icon from "react-native-vector-icons/AntDesign";

export default function App() {
  const [countriesData, setCountriesData] = useState<{
    list: Array<unknown>;
    searchVal: string;
    filtered: Array<unknown>;
    regions: Array<unknown>;
  }>({
    list: [],
    searchVal: "",
    filtered: [],
    regions: [
      { label: "Africa", value: "Africa" },
      { label: "America", value: "Americas" },
      { label: "Asia", value: "Asia" },
      { label: "Europe", value: "Europe" },
      { label: "Oceania", value: "Oceania" },
    ],
  });
  const [screenWidth, setScreenWidth] = useState<number>(
    Dimensions.get("window").width
  ); //sets responsive image width
  const [showBtn, setShowBtn] = useState<Boolean>(false);
  const [darkMode, setDarkMode] = useState<Boolean>(false); 


  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/independent?status=true"
      );
      const data = await response.json();
      setCountriesData({ ...countriesData, list: data });
    } catch (err) {
      throw err;
    }
  };

  //Displays all country profile when back button is clicked
  const showAllResults = () => {
    setCountriesData({ ...countriesData, filtered: countriesData.list });
    setShowBtn(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View style={{backgroundColor: darkMode ? "#202d36" : "#fff"}} className="bg-gray-100 overflow-scroll">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {!showBtn ? (
          <View style={{ zIndex: 2000 }}>
            <Form
              countriesData={countriesData}
              setCountriesData={setCountriesData}
              darkMode={darkMode}
            />
          </View>
        ) : (
          <View className="mb-8 mx-auto w-11/12">
            <View className="w-1/3">
              <Pressable>
                <Text style={{color: darkMode ? "#fff" : '#000000'}} ><Icon name="arrowleft" onPress={showAllResults} size={20} color={darkMode ? '#F8F8FF' : '#000000' }/>  Back</Text> 
              </Pressable>
            </View>
          </View>
        )}
        <ScrollView>
          <View className="pb-2" style={{ zIndex: 1000 }}>
            <CountriesList
              list={countriesData.list}
              filtered={countriesData.filtered}
              searchVal={countriesData.searchVal}
              screenWidth={screenWidth}
              setShowBtn={setShowBtn}
              setCountriesData={setCountriesData}
              countriesData={countriesData}
              showBtn={showBtn}
              darkMode={darkMode}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}


  //background color: #202d36
  //secondary: #1e2c37