import React, { Text, View, Image } from "react-native";

type country = {
    png: string,
    common: string , 
    population: number,
    region: string,
    capital: Array<string>
}

const Card = ({png, common, population, region, capital}: country) => {
    //Individual country card information
    return(
        <View className="pb-2">
        <View
          className={`mb-8 bg-white rounded-lg w-2/3 mx-auto`}
        >
          <View className={`${""} py-16 px-8`}>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: png }}
            />
          </View>
          {/* country name and info */}
          <View className={`${""} pt-2`}>
            <View className="pt-4">
              <Text className="text-xl font-bold">{common}</Text>
              <Text className="text-base text-gray-700">
                <Text className="font-bold">Population: </Text>
                {population}
              </Text>
              <Text className="text-base text-gray-700">
                <Text className="font-bold">Region: </Text>
                {region}
              </Text>
              <Text className="text-base text-gray-700">
                <Text className="font-bold">Capital: </Text>
                {capital[0]}
              </Text>
            </View>
          </View>
        </View>
  </View>        
    )
}

export default Card; 