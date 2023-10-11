import {
    Button,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import React from "react";
import theme from "./theme";

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <Button variant="contained">Hello world</Button>
                </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
