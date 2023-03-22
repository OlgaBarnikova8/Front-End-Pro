import PropTypes from "prop-types";

const Welcome = ({ name, lastname, type, color="black", children }) => {
    const className = type === "italic" ? "italic" : "";

    if (lastname === "Barnikov") {
        return <h4 className={className} style={{color}}>{name}, hello from Ukraine!!!</h4>;
    }

    return <h2 className={className} style={{color}}>{children}, {name} from Ukraine!</h2>;
};

Welcome.propTypes = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    type: PropTypes.oneOf(["italic"]),
    color: PropTypes.string,
    children: PropTypes.node
};

export default Welcome;
