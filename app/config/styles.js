const colors = require("./colors");
const { Platform } = require("react-native");

export default {
  text: {
    color: colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
