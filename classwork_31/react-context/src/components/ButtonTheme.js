import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const ButtonTheme = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return <button className={`button_${theme}`}>{children}</button>;
}

export default ButtonTheme;
