import {
  lightTheme as oldLightTheme,
  darkTheme as oldDarkTheme,
} from "../../theme"

/** @deprecated */
const oldLightThemeColors = oldLightTheme.colors
const oldDarkThemeColors = oldDarkTheme.colors
/**
 * @deprecated
 *
 * define each of the old colors as a `semanticToken`:
 * `name: { _light: lightColor, _dark: darkColor }`
 */
const oldColors = Object.keys(oldLightThemeColors).reduce((colors, color) => {
  const lightColor = oldLightThemeColors[color]
  const darkColor = oldDarkThemeColors[color]

  if (typeof lightColor !== "string" || typeof darkColor !== "string") {
    return colors
  }

  return {
    ...colors,
    [color]: { _light: lightColor, _dark: darkColor },
  }
}, {})

const semanticTokens = {
  colors: {
    // define old colors from the old theme as semanticTokens to transition
    // from emotion components to chakra
    // TODO: remove these colors as we migrate away from them
    ...oldColors,

    // Design System colors
    primary: { _light: "blue.500", _dark: "orange.500" },
    primaryLight: { _light: "blue.100", _dark: "orange.100" },
    primaryDark: { _light: "blue.700", _dark: "orange.800" },
    primaryHover: { _light: "blue.300", _dark: "orange.300" },
    primaryVisited: { _light: "blue.600", _dark: "orange.600" },
    // ! Deprecating primaryPressed
    primaryPressed: { _light: "blue.300", _dark: "orange.800" },
    body: { _light: "gray.700", _dark: "gray.100" },
    // ! Deprecating bodyInverted
    bodyInverted: { _light: "gray.100", _dark: "gray.700" },
    bodyLight: { _light: "gray.500", _dark: "gray.100" },
    disabled: { _light: "gray.300", _dark: "gray.500" },
    background: { _light: "white", _dark: "gray.700" },
    backgroundHighlight: { _light: "gray.100", _dark: "gray.900" },
    // ! Deprecating neutral
    neutral: { _light: "white", _dark: "gray.900" },
    success: "green.500",
    successLight: "green.100",
    // ! Deprecating successNeutral
    successNeutral: { _light: "green.100", _dark: "green.900" },
    // ? Keep "error" or rename to "fail" ?
    error: "red.500",
    errorLight: "red.100",
    // ! Deprecating errorNeutral
    errorNeutral: { _light: "red.100", _dark: "red.900" },
    attention: "yellow.500",
    attentionLight: "yellow.200",
  },
}

export default semanticTokens
