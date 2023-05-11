import React, { Text, View } from "react-native";
import Card from "./card";

type countriesData = {
  list: Array<unknown>;
  filtered: Array<unknown>;
  searchVal: string;
};

const CountriesList = ({ list, filtered, searchVal }: countriesData) => {
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
        <Text>No results</Text>
      </>
    );
  }

  //Displays all countries
  return (
    <>
      {list?.map((country: any) => {
        return (
          <Card
            key={`react-country-key${country.name.common}`}
            png={country.flags.png}
            common={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        );
      })}
    </>
  );
};

export default CountriesList;