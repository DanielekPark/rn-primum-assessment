import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, TextInput, Image } from "react-native";
import Header from "./components/header";
import Select from "./components/select";

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
        <View className="mx-auto w-11/12">
          <View className="border-2 pt-4 pb-4">
            <TextInput
              placeholder="Search for a country..."
              className="text-black bg-white block w-full rounded-lg pt-2 pb-2 text-sm font-medium"
            />
            <View className="mb-8 flex">
              <View className="mt-10">
                <Select />
              </View>
            </View>
          </View>
        </View>
        {/* List of countries */}
        <View className="pb-2">
          {countriesData?.list?.map((country: any, index: number) => {
            return (
              <View
                className={`mb-8 bg-white rounded-lg w-2/3 mx-auto`}
                key={`react-key${index}`}
              >
                <View className={`${""} py-16 px-8`}>
                  <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: country.flags.png }}
                  />
                </View>
                {/* country name and info */}
                <View className={`${""} pt-2`}>
                  <View className="pt-4">
                    <Text className="text-xl font-bold">
                      {country.name.common}
                    </Text>
                    <Text className="text-base text-gray-700">
                      <Text className="font-bold">Population: </Text>
                      {country.population}
                    </Text>
                    <Text className="text-base text-gray-700">
                      <Text className="font-bold">Region: </Text>
                      {country.region}
                    </Text>
                    <Text className="text-base text-gray-700">
                      <Text className="font-bold">Capital: </Text>
                      {country.capital[0]}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
