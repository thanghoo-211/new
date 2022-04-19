import { ThemeProvider, Button, createTheme } from '@rneui/themed';

const myTheme = createTheme({
  lightColors: {
    primary: '#4ecdc4',
  },
  darkColors: {
    primary: '#121212',
  },
  mode: 'dark',
});
export default myTheme

// export const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     text: '#cdcdcd',
//     primary: '#4ecdc4',
//     secondary: '#ff6b6b',
//     error: '#f13a59',
//   },
// }
