import { BlurView } from "expo-blur";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import RecipeCreatorCardDetail from "./RecipeCreatorCardDetail";

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
  if (Platform.OS == "ios") {
    return (
      <BlurView tint="dark" style={styles.recipeCreatorCardContainer}>
        <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
      </BlurView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentBlack9,
        }}
      ></View>
    );
  }
};

const styles = StyleSheet.create({
  recipeCreatorCardContainer: {
    flex: 1,
    borderRadius: SIZES.radius,
  },
});

export default RecipeCreatorCardInfo;
