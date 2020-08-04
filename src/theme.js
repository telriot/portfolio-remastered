import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#f1f1f1",
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
