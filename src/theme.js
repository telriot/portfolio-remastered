import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
	palette: {
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "#f1f1f1",
		},
	},
	typography: {
		fontFamily: [
			"Open Sans",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),

		h2: {
			fontWeight: 500,
			fontFamily: "Roboto",
		},
		h3: {
			fontWeight: 500,
			fontFamily: "Roboto",
		},
		button: {
			fontWeight: 600,
		},
		body1: { fontFamily: "Open Sans" },
	},
});
theme = responsiveFontSizes(theme);
export default theme;
