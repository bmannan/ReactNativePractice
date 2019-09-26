import React, { Component } from "react";
import { ScrollView, StatusBar, Platform, Linking } from "react-native";
import { ListItem, Separator } from "../components/List";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import { connectAlert } from "../components/Alert";

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";

class Options extends Component {
  static propType = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };

  handleThemesPress = () => {
    this.props.navigation.navigate("Themes");
  };

  handleSitePress = () => {
    Linking.openURL("https://www.frankfurter.app").catch(() =>
      this.props.alertWithType(
        "error",
        "Sorry",
        "Frankfurter can't be opened right now."
      )
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Frankfurter.app"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
