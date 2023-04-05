import { NavLink, Outlet } from "react-router-dom";
import Box from "../components/Box";
import Button from "../components/Button";
import ButtonStyled from "../components/ButtonStyled";
import IconButton from "../components/IconButton";
import { ReactComponent as PlusIcon } from '../assets/icons/plus.svg';

const Root = () => {
    return (
        <div>
            {/* <Box />
            <Button>Send</Button>
            <Button>Reset</Button>
            <button className="button">Test</button>
            <ButtonStyled>button</ButtonStyled> */}
            <IconButton><PlusIcon /></IconButton>
            <IconButton disabled ><PlusIcon /></IconButton>
            <IconButton color="secondary" ><PlusIcon /></IconButton>
            <IconButton color="secondary" disabled ><PlusIcon /></IconButton>
        </div>
    )
};

export default Root;
