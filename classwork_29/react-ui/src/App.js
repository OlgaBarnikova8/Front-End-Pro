import { useState } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Form from "./Components/Form";

import './App.css';


function App() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };
  
  return (
    <div>
      <Typography variant="h4">@mui</Typography>
      <Box m={1}>      
        <Button variant="contained" onClick={() => console.log('click')}>click</Button>
        <Button variant="outlined" sx={{ m:1 }}>Сlick</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <IconButton aria-label="delete"><DeleteIcon /></IconButton>
        <Checkbox  defaultChecked />
        <FormControlLabel control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />} label="Label" />
      </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>                   
              <TableCell component="th" scope="row">Cake</TableCell>
              <TableCell align="right">300</TableCell>
              <TableCell align="right">200</TableCell>
              <TableCell align="right">100</TableCell>
              <TableCell align="right">50</TableCell>   
            </TableBody>
          </Table>
        </TableContainer>

      <Box component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },  m:1,
        }}
        noValidate
        autoComplete="off"
      >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
      </div>  
      </Box>
      <Form />
    </div>   
  );
}

export default App;
