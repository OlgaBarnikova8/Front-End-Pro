import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Switcher = () => {
    const { switchTheme, theme } = useContext(ThemeContext);

    const handleLightTheme = () => {
        switchTheme("light");
    }

    const handleDarkTheme = () => {
        switchTheme("dark");
    }

    return (
        <div>
            <button onClick={handleLightTheme} disabled={theme === "light"}>Light theme</button>
            <button onClick={handleDarkTheme} disabled={theme === "dark"}>Dark theme</button>
        </div>
    )
};

export default Switcher;
