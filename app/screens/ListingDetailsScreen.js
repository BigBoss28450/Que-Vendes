import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/img/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Bocinas Logitech</Text>
        <Text style={styles.subTitle}>$100</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/img/mosh.jpg")}
            title="Alexis Isidoro"
            subTitle="5 Artículos en venta"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 30,
  },
});
