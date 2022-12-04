import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../constants";

const CustomButton = ({
  buttonText,
  buttonContainerStyle,
  colors,
  onPress,
  children,
}) => {
  if (colors?.length > 0) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={{ ...buttonContainerStyle }}
        >
          <Text
            style={{ textAlign: "center", color: COLORS.white, ...FONTS.h3 }}
          >
            {children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }}>
        <Text
          style={{ textAlign: "center", color: COLORS.lightGreen, ...FONTS.h3 }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
