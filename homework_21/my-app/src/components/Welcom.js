const Welcome = ({ name, lastname, type, color="black" }) => {
    const className = type === "italic" ? "italic" : "";

    if (lastname === "Barnikov") {
        return <h4 className={className} style={{color}}>{name}, hello from Ukraine!!!</h4>;
    }

    return <h2 className={className} style={{color}}>{name}, hello from Ukraine!</h2>;
};

export default Welcome;
