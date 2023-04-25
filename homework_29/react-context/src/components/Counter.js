import { memo } from 'react';
import { Box, Button, TextField } from "@mui/material";
import useCounter from "../hooks/useCounter";

const Counter = () => {
    const { initialValue, count, increment, decrement, reset, setCount } = useCounter(); 
    
    const handleChange = ( {target: {value} } ) => {          
        (value < initialValue ? setCount(value = initialValue) : setCount(value));      
    } 

    return (
        <Box sx={{display: 'flex', gap: 2,}}>
            <Button onClick={increment} variant="contained">+1</Button>              
            <TextField value={count} onChange={handleChange} type="number" color="primary"/> 
            <Button onClick={decrement} disabled={count === initialValue} variant="contained">-1</Button>
            <Button onClick={reset} variant="outlined">Reset</Button>
        </Box>
    )
};

export default memo(Counter);
