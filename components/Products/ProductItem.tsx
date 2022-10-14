import { Image } from "react-native";
import { Text, View } from "../Themed";
import product from "../../assets/AmazonAssets/data/product";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Product } from "../../types";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.title}>
          {product.title}
        </Text>
        <View style={styles.starsContainer}>
          {[...new Array(5)].map((arr, index) => (
            <FontAwesome
              key={`${product.id}-i`}
              style={styles.star}
              name={index < Math.floor(product.avgRating) ? "star" : "star-o"}
              size={18}
              color={"#e47911"}
            />
          ))}
          <Text>{product.ratings}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.price}>from ${product.price}</Text>
          {product.oldPrice && (
            <Text style={styles.oldPrice}>{product.oldPrice}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  image: {
    width: 150,
    height: 150,
    flex: 2,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  star: {
    margin: 2,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: "normal",
    textDecorationLine: "line-through",
  },
});
