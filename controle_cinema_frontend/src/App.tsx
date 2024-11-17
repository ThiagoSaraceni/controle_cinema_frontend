import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { AllRoutes } from "./routes";
import { theme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AllRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
