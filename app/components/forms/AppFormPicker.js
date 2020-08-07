import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

export default function AppFormField({
  items,
  name,
  numberOfColumns,
  width,
  PickerItemComponent,
  placeholder,
}) {
  const { setFieldValue, touched, values, errors } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        width={width}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
