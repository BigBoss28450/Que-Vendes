import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  showChevrons = false,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.lightGray}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && (
              <Text style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </Text>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              style={styles.chevron}
              name="chevron-right"
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  subTitle: {
    color: colors.mediumGray,
  },
  chevron: {
    fontSize: 18,
    color: colors.mediumGray,
  },
});
