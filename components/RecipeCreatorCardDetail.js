import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import { COLORS, FONTS, icons } from "../constants";

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <View style={{ width: 40, height: 40, marginLeft: 20 }}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}
        >
          Recipe By:
        </Text>
        <Text style={{ color: COLORS.white2, ...FONTS.h3 }}>
          {selectedRecipe?.author?.name}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1,
        }}
        onPress={() => console.log("View Profile")}
      >
        <Image
          source={icons.rightArrow}
          style={{ width: 15, height: 15, tintColor: COLORS.lightGreen }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RecipeCreatorCardDetail;
