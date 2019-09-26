import EStyleSheet from "react-native-extended-stylesheet";
import { StyleSheet } from "react-native";

const styles = EStyleSheet.create({
  $underlayColor: "$border",
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "$white"
  },
  text: {
    fontSize: 16,
    color: "$darkText"
  },
  separator: {
    marginLeft: 20,
    backgroundColor: "$border",
    flex: 1,
    height: StyleSheet.hairlineWidth
  },
  icon: {
    backgroundColor: "transparent",
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  iconVisible: {
    backgroundColor: "$primaryBlue"
  },
  checkIcon: {
    width: 12,
    height: 12
  }
});

export default styles;
