import React from "react";
import { Text, View, FlatList } from "react-native";
import Card from "./card";

type Props = {
  list: Array<unknown>;
  filtered: Array<unknown>;
  searchVal: string;
  screenWidth: number;
  setShowBtn: Function;
  setCountriesData: Function;
  countriesData: {
    list: Array<unknown>,
    searchVal: string,
    filtered: Array<unknown>,
    regions: Array<unknown>,
  }
  showBtn: Boolean; 
  darkMode: Boolean; 
};

const CountriesList = ({ list, filtered, searchVal, screenWidth, setShowBtn, setCountriesData, countriesData, showBtn, darkMode }: Props) => {
    //Displays countries based on typed value
  if (filtered.length > 0) {
    return (
      <>
        <View className="pb-2">
          {filtered?.map((country: any, index: number) => {
            return (
              <Card
                key={`filter-key${country.name.common + index}`}
                png={country.flags.png}
                common={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                screenWidth={screenWidth}
                list={list}
                currencies={country.currencies}
                setShowBtn={setShowBtn}
                setCountriesData={setCountriesData}
                countriesData={countriesData}
                showBtn={showBtn}
                subregion={country.subregion}
                tld={country.tld}
                borders={country.borders}
                languages={country.languages}
                darkMode={darkMode}
              />
            );
          })}
        </View>
      </>
    );
  }

  //Hides all if no countries matches the search results
  if (searchVal.length > 0 && filtered.length < 1) {
    return (
      <>
        <Text style={{color: darkMode ? "#fff" : '#000000'}} >No results</Text>
      </>
    );
  }

  //Displays all countries
  return (
    <>
      {list?.map((country: any, index: number) => {
        return (
          <Card
            key={`react-country-key${country.name.common}${index}`}
            png={country.flags.png}
            common={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            screenWidth={screenWidth}
            list={list}
            setShowBtn={setShowBtn}
            setCountriesData={setCountriesData}
            countriesData={countriesData}
            showBtn={showBtn}
            subregion={country.subregion} 
            currencies={country.currencies}
            tld={country.tld}
            borders={country.borders}
            languages={country.languages}
            darkMode={darkMode}
          />
        );
      })}

    </>
  );
};

export default CountriesList;