import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import RecipeCardInfo from "./RecipeCardInfo";

const TrendingCard = ({ containerStyle, recipeItem, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={recipeItem.image}
        style={{ width: 250, height: 350, borderRadius: SIZES.radius }}
      />

      <View
        style={{
          position: "absolute",
          top: 20,
          left: 15,
          paddingHorizontal: SIZES.radius,
          paddingVertical: 5,
          backgroundColor: COLORS.transparentGray,
          borderRadius: SIZES.radius,
        }}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
          {recipeItem.category}
        </Text>
      </View>

      <RecipeCardInfo recipeItem={recipeItem} />
    </TouchableOpacity>
  );
};

export default TrendingCard;
