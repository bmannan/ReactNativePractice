import React from "react";
import styles from "./styles";
import { Text } from "react-native";
import moment from "moment";
import PropTypes from "prop-types";

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text style={styles.smallText}>
    {base} = {conversionRate} {quote} as of{" "}
    {moment(date).format("MMMM D, YYYY")}
  </Text>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};

export default LastConverted;
