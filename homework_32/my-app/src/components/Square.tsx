import { SquareValue } from "../types";

type SquareProps = {
    value: SquareValue;
    onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps) => (
    <button className="square" onClick={onClick}>
        {value}
    </button>
);

export default Square;
