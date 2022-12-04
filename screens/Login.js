import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StatusBar, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { COLORS, FONTS, images, SIZES } from "../constants";

const Login = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View style={{ height: SIZES.height > 700 ? "65%" : "60%" }}>
        <ImageBackground
          source={images.loginBackground}
          style={{ flex: 1, justifyContent: "flex-end" }}
          resizeMode="cover"
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.padding,
            }}
          >
            <Text
              style={{
                width: "80%",
                color: COLORS.white,
                ...FONTS.largeTitle,
                fontWeight: "700",
                lineHeight: 45,
              }}
            >
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetail = () => {
    return (
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        {/* {description} */}
        <Text
          style={{
            marginTop: SIZES.radius,
            color: COLORS.gray,
            width: "70%",
            ...FONTS.body3,
          }}
        >
          Discover and taste all delicious recipes now!
        </Text>

        {/* {buttons} */}
        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace("Home")}
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
          >
            Login
          </CustomButton>

          <CustomButton
            onPress={() => navigation.replace("Home")}
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1
            }}
          >
            Sign Up
          </CustomButton>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
    >
      <StatusBar barStyle="light-content" />
      {/* {header section} */}
      {renderHeader()}

      {/* {detail section} */}
      {renderDetail()}
    </View>
  );
};

export default Login;
