import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPcikerItem from "../components/CategoryPcikerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Titulo"),
  price: Yup.number().required().min(1).max(1000000).label("Precio"),
  description: Yup.string().label("Descripción"),
  category: Yup.object().required().nullable().label("Categoría"),
});

const categories = [
  { label: "Muebles y Hogar", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Ropa", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Electrónica", value: 3, backgroundColor: "blue", icon: "lock" },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Titulo" />
        <AppFormField
          keyboardType="numeric"
          maxLength={10}
          name="price"
          width={150}
          placeholder="Precio"
        />
        <AppFormPicker
          items={categories}
          width={250}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPcikerItem}
          placeholder="Categoría"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="secription"
          numberOfLines={3}
          placeholder="Descripción"
        />
        <SubmitButton title="Publicar" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
