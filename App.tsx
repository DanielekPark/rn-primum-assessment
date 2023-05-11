import React, { useState, useEffect } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/header";
import CountriesList from "./components/countrieslist";
import Form from "./components/form";

export default function App() {
  const [countriesData, setCountriesData] = useState<{
    list: Array<unknown>,
    searchVal: string,
    filtered: Array<unknown>,
    regions: Array<unknown>,
  }>({
    list: [],
    searchVal: "",
    filtered: [],
    regions: [
      { label: "Africa", value: "Africa"},
      { label: "America", value: "Americas"},
      { label: "Asia", value: "Asia"},
      { label: "Europe", value: "Europe"},
      { label: "Oceania", value: "Oceania"}],
  });

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <View className="bg-gray-100" >
        <Header />
        <View style={{zIndex: 2000}}>
        <Form
          countriesData={countriesData}
          setCountriesData={setCountriesData}
        />
        </View>
        <View style={{zIndex: 1000}}>
        <ScrollView>
          {/* List of countries */}
          <View className="pb-2">
            <CountriesList {...countriesData} />
          </View>
        </ScrollView>          
        </View>
      </View>
    </SafeAreaView>
  );
}
