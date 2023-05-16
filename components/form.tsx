import React, { useState } from "react";
import {View, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

type props = {
  setCountriesData: Function,
  countriesData: any,
}

const Form = ({ setCountriesData, countriesData} : props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(''); 

  const handleChange = (value: string) => {
    setCountriesData({...countriesData, searchVal: value});
    const results = countriesData?.list?.filter((country: any) => {
      if (country.name.common.toLowerCase().includes(value.toLowerCase())) {
        return country; 
      }
      
    }); 
    setCountriesData({ ...countriesData, filtered: results }); 
  }

  //filter countries using drop down
  const handleSelect = (value: string) => {
    const filterSearch = countriesData?.list?.filter((country: any) => value === country.region)
    setCountriesData({ ...countriesData, filtered: filterSearch }); 
    return;
  }
  
  return (
    <View className="mx-auto w-11/12">
      <View className="pt-4 pb-4">
        <TextInput
          onChangeText={(value) => handleChange(value)}
          placeholder="Search for a country..."
          className="text-black bg-white block w-full rounded-lg pl-2 pt-2 pb-2 text-sm font-medium"
        />
          <View className="mt-10 mb-6 w-2/3">
            <DropDownPicker
              open={open}
              value={value}
              items={countriesData.regions}
              setValue={setValue}
              setOpen={setOpen}
              onChangeValue={(value) => handleSelect(`${value}`)}
              placeholder="Filter by region"
            />
          </View>
      </View>
    </View>
  );
};

export default Form; 