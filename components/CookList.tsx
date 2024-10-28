import { FlashList } from "@shopify/flash-list";
import { View, Text, Image, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating-widget";

interface Cook {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
}

const cooks: Cook[] = [
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/2e8f6083125496ca693d713c920047b6206ef7d9",
    name: "Garlic Butter Steak and Potatoes Skillet",
    description: "",
    category: "meat",
    price: 27.00,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/65dd94c2c780dc3a60a183da94cb4acb0278c509",
    name: "Chicken Caesar Pasta salad",
    description: "",
    category: "chicken",
    price: 9.99,
    rating: 4,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/8bc2a42e7a1fc020ef9cb98f753ca8de5b67909d",
    name: "Garlic Chicken",
    description: "",
    category: "chicken",
    price: 19.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Grilled Salmon with Mango Salsa & Coconut Rice - Cooking Classy",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },
  {
    image: "https://www.figma.com/file/qT8UocURFFNg3sNsTyfUN8/image/0c057f62cf059ff48cc7fa373911c3851c0bfd5e",
    name: "Baked Honey Cilantro Lime Salmon ",
    description: "",
    category: "chicken",
    price: 21.99,
    rating: 4.5,
  },

];

const CookItem = ({ item }: { item: Cook }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Image on the left */}
        <Image
          source={{ uri: item.image }}
          style={styles.image}
        />

        {/* Content on the right */}
        <View style={styles.content}>
          <Text style={styles.title}>{item.name}</Text>

          {/* Rating */}
          <View style={styles.ratingContainer}>
            <StarRating
              enableSwiping={false}
              rating={item.rating}
              maxStars={5}
              starSize={16}
              onChange={(rating: number) => {}}
            />
          </View>

          <Text style={styles.price}>$ {item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 10,
    marginRight: 15, // Space between image and text
  },
  content: {
    flex: 1, // Take up remaining space
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  star: {
    fontSize: 18,
    color: "#FFD700", // Gold color for stars
  },
  ratingText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});

interface CookListProps {
  itemSize: number;
}

export const CookList = ({ itemSize }: CookListProps) => {
  return (
    <FlashList
      data={cooks}
      renderItem={({ item }: { item: Cook }) => <CookItem item={item} />}
      getItemType={(item) => typeof item}
      estimatedItemSize={itemSize}
    />
  );
};
