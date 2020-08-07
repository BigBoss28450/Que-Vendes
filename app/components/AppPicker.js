import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import {
  TouchableWithoutFeedback,
  FlatList,
} from "react-native-gesture-handler";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  width = "100%",
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.lightGray}
                style={styles.icon}
              />
            </View>
          )}
          {selectedItem ? (
            <Text style={[defaultStyles.text, styles.text]}>
              {selectedItem.label}
            </Text>
          ) : (
            <Text style={[defaultStyles.text, styles.placeholder]}>
              {placeholder}
            </Text>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.mediumGray}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </SafeAreaView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightLightGray,
    borderRadius: 10,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  iconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: colors.mediumGray,
    flex: 1,
  },
  textInput: {
    fontSize: 18,
  },
});
