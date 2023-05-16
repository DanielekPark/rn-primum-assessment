import React from "react";
import { Text, View, Image, Pressable } from "react-native";

type Props = {
  png: string;
  common: string;
  population: number;
  region: string;
  capital: Array<string>;
  screenWidth: number;
  list: any;
  setShowBtn: Function;
  setCountriesData: Function;
  countriesData: {
    list: Array<unknown>;
    searchVal: string;
    filtered: Array<unknown>;
    regions: Array<unknown>;
  };
  showBtn: Boolean;
  currencies: string;
  subregion: any;
  tld: string;
  borders: Array<string>;
  languages: string;
  darkMode: Boolean;
};

const Card = ({
  png,
  common,
  population,
  region,
  capital,
  screenWidth,
  list,
  setShowBtn,
  setCountriesData,
  countriesData,
  showBtn,
  currencies,
  subregion,
  tld,
  borders,
  languages,
  darkMode,
}: Props) => {
  const showProfile = () => {
    const result = list?.find((country: any) => country.name.common === common);
    setCountriesData({ ...countriesData, filtered: [result] });
    setShowBtn(true);
  };

  //Individual country information
  return (
    <Pressable onPress={showProfile}>
      <View
        style={{ backgroundColor: darkMode ? "#202d36" : "#fff" }}
        className="pb-2"
      >
        <View className={`mb-8 overflow-hidden rounded-lg w-2/3 mx-auto`}>
          <View>
            <Image
              style={{ width: (screenWidth * 2) / 3, height: 200 }}
              source={{ uri: png }}
            />
          </View>
          {/* country name and info */}
          <View className={`pt-2`}>
            <View className="pt-2 pb-4 pl-4">
              <Text
                style={{ color: darkMode ? "#fff" : "#000000" }}
                className="text-xl font-bold"
              >
                {common}
              </Text>
              <Text
                style={{ color: darkMode ? "#fff" : "#000000" }}
                className="text-base "
              >
                <Text className="font-bold">Population: </Text>
                {population}
              </Text>
              <Text
                style={{ color: darkMode ? "#fff" : "#000000" }}
                className="text-base "
              >
                <Text className="font-bold">Region:</Text>
                {region}
              </Text>
              {showBtn && (
                <Text
                  style={{ color: darkMode ? "#fff" : "#000000" }}
                  className="text-base "
                >
                  <Text className="font-bold">Sub Region: </Text>
                  {subregion}
                </Text>
              )}
              <Text
                style={{ color: darkMode ? "#fff" : "#000000" }}
                className="text-base "
              >
                <Text className="font-bold">Capital: </Text>
                {capital}
              </Text>
              {showBtn && (
                <View className="mt-3 mb-3">
                  <Text style={{color: darkMode ? "#fff" : '#000000'}} className="text-base ">
                    <Text
                      style={{ color: darkMode ? "#fff" : "#000000" }}
                      className="font-bold"
                    >
                      Top Level Domain:{" "}
                    </Text>
                    {tld}
                  </Text>
                  <Text
                    style={{ color: darkMode ? "#fff" : "#000000" }}
                    className="text-base "
                  >
                    <Text
                      style={{ color: darkMode ? "#fff" : "#000000" }}
                      className="font-bold"
                    >
                      Currencies:{" "}
                    </Text>
                    {Object.keys(currencies)[0]}
                  </Text>
                  <Text
                    style={{ color: darkMode ? "#fff" : "#000000" }}
                    className="text-base"
                  >
                    <Text className="font-bold">Languages: </Text>
                    {Object.keys(languages)[0]}
                  </Text>
                  <View className="mt-3 mb-3">
                    <Text  style={{color: darkMode ? "#fff" : '#000000'}} className="text-xl font-bold">Border Countries:</Text>
                    <View className="flex-row justify-around w-full flex-wrap mt-3">
                      {borders?.map((item, index) => (
                        <Text  style={{color: darkMode ? "#fff" : '#000000'}}
                          key={`border-key-${index}`}
                          className="w-2/5 text-center mb-2 border-2 border-gray-200"
                        >
                          {item}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
