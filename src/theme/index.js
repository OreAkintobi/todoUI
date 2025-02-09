import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "styled-components/native";

import { theme } from "./types";

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const useThemeContext = () => useContext(ThemeContext);

export default Theme;
