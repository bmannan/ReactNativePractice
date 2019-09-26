import React from "react";
import { View, Text, TouchableHighlight, TextInput } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import color from "color";

const InputWithButton = props => {
  const { onPress, buttonText, editable = true, textColor } = props;

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string
};

export default InputWithButton;
