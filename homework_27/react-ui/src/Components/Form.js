import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const Form = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
      <Box sx={{ width: '100%', maxWidth: 700, m:'50px' }}>
      <Typography variant="h1">Passenger information</Typography> 
      <Typography variant="h3">Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.</Typography>
      <Typography variant="h2">Passenger 1 (Adult)</Typography> 
        <form onSubmit={handleSubmit(onSubmit) }>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field}   
                  sx={{ width: '200px', height: '50px',  mr:'25px', mb:'25px' }}                
                  label="First name*" 
                  variant="outlined"                                    
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller 
              control={control}
              name="Middle"               
              render={({ field }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '200px', height: '50px',  mr:'25px', mb:'25px' }} 
                  label="Middle" 
                  variant="outlined"                   
                />
              )}
            />
            <Controller 
              control={control}
              name="lastName"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '200px', height: '50px',  mb:'25px' }} 
                  label="Last name*" 
                  variant="outlined" 
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller 
              control={control}
              name="suffix"               
              render={({ field }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '200px', height: '50px',  mr:'25px', mb:'50px' }} 
                  label="Suffix" 
                  variant="outlined"                   
                />
              )}
            />
            <Controller 
              control={control}
              name="dateOfBirth"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '250px', height: '50px',  mb:'50px' }}                  
                  variant="outlined" 
                  helper="MM/DD/YY" type="date"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller 
              control={control}
              name="email"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '300px', height: '50px', mr:'25px', mb:'25px' }}                  
                  variant="outlined" 
                  label="Email address*" 
                  type="email"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller 
              control={control}
              name="phone"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '300px', height: '50px',  mb:'25px' }}                  
                  variant="outlined" 
                  label="Phone number*" 
                  type="tel"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller 
              control={control}
              name="redress"              
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '300px', height: '50px', mr: '25px', mb:'25px' }}                  
                  variant="outlined" 
                  label="Redress number" 
                  type="tel"                  
                />
              )}
            />
            <Controller 
              control={control}
              name="travellerPhone"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  sx={{ width: '300px', height: '50px',  mb:'25px' }}                  
                  variant="outlined" 
                  label="Known traveller number*" 
                  type="tel"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Button type="submit" variant="contained" size="large" 
            sx={{ width: '160px', height: '50px',  mt:'50px' }} >Submit</Button>
        </form>
        </Box>  
    );
};

export default Form;
