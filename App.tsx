import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import Header from "./components/header";
import CountriesList from "./components/countrieslist";
import Form from "./components/form";

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

  // useEffect(() => {
  //   console.log(countriesData);
  // }, [countriesData]);

  return (
    <SafeAreaView>
      <View className="bg-gray-100 overflow-scroll">
        <Header />
        {!showBtn ? (
          <View style={{ zIndex: 2000 }}>
            <Form
              countriesData={countriesData}
              setCountriesData={setCountriesData}
            />
          </View>
        ) : (
          <View className="mb-8 mx-auto w-11/12">
            <View className="w-1/3">
              <Button title="<--- Back" onPress={showAllResults} />
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
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
