import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TextInput, Image } from "react-native";
import Header from "./components/header";
import CountriesList from "./components/countrieslist";
import Form from "./components/form";

export default function App() {
  const [countriesData, setCountriesData] = useState<{
    list: Array<unknown>;
    searchVal: string;
    filtered: Array<unknown>;
    regions: Array<string>;
  }>({
    list: [],
    searchVal: "",
    filtered: [],
    regions: ["Africa", "America", "Asia", "Europe", "Oceania"],
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
    <ScrollView>
      <View className="bg-gray-100">
        <Header />
        <Form 
          countriesData={countriesData}
          setCountriesData={setCountriesData}
          />
        {/* List of countries */}
        <View className="pb-2">
          <CountriesList {...countriesData} />
        </View>
      </View>
    </ScrollView>
  );
}
