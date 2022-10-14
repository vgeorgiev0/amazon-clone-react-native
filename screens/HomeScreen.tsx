import { View, FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/Products/ProductItem";
import { RootTabScreenProps } from "../types";
import product from "../assets/AmazonAssets/data/products";

export default function StoreScreen({
  navigation,
}: RootTabScreenProps<"HomeScreen">) {
  return (
    <View style={styles.page}>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
