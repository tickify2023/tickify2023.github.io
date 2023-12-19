import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette{
    BG = "000000",
    AMARILLO="#d4eb2b"
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.AMARILLO,
        }
    },
//    components:{
  //      M
//    }
})

//esto es lo que se llama desde el componente  para configurar
export const ThemeConfig: React.FC<ThemeProp> = ({children}) =>{
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            {children}
        </ThemeProvider>
    )
};