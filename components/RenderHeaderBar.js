import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, icons, SIZES } from "../constants";

const RenderHeaderBar = ({ navigation }) => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        paddingBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 35,
          width: 35,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: COLORS.lightGray,
          backgroundColor: COLORS.transparentBlack5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={icons.back}
          style={{
            width: 15,
            height: 15,
            tintColor: COLORS.darkGreen,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RenderHeaderBar;
