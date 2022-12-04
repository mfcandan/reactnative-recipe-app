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
import { COLORS, dummyData, SIZES } from "../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View></View>}
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
