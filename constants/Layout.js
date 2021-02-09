import { Dimensions } from "react-native";

const width = Math.min(Dimensions.get("window").width, 640);
const height = Dimensions.get("window").height;
const relativeWidth = (w) => (width * w) / 320;
const relativeHeight = (h) => (height * h) / 582;

export default {
  window: {
    width,
    height,
  },
  relativeWidth,
  relativeHeight,
  rw: relativeWidth,
  rh: relativeHeight,
  isSmallDevice: width < 375,
};
