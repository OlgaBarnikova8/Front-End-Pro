import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const ThemeValue = () => {
    const { theme } = useContext(ThemeContext);
    return <div>Theme: {theme}</div>
};

export default ThemeValue;
