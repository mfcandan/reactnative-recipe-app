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
import CategoryCard from "../components/CategoryCard";
import { COLORS, dummyData, FONTS, images, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          alignItems: "center",
          height: 80,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ color: COLORS.darkGreen, ...FONTS.h2 }}>
            Merhaba Fatih
          </Text>
          <Text style={{ marginTop: 3, color: COLORS.gray, ...FONTS.body3 }}>
            Bugün ne yemek pişirmek istersin?
          </Text>
        </View>

        <TouchableOpacity onPress={() => console.log("profile page")}>
          <Image
            source={images.profile}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderHeader()}
            {/* {SEARCH Bar} */}

            {/* {SEE RECIPE CARD} */}

            {/* {TRENDING SECTIONS} */}

            {/* {CATEGORY HEADER} */}
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              onPress={() => navigation.navigate("Recipe", { recipe: item })}
              containerStyle={{ marginHorizontal: SIZES.padding }}
              categoryItem={item}
            />
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
      />
    </SafeAreaView>
  );
};

export default Home;
