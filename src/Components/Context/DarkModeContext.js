import React, { createContext, useState } from 'react'


const ThemeContext = createContext({
    theme: "light",
});
function DarkModeContext() {
    const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState("light");

        const handleChangeTheme = (newTheme) => {
            setTheme(newTheme);
        }
    }
    const useTheme = () => {
        const { theme } = useContext(ThemeContext);
    
        return theme;
    };
    return (
        <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
    
export default DarkModeContext;