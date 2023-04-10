import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';

const Form = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller 
              control={control}
              name="firstName"
              rules={{ required: "The field is required" }}  
              render={({ field, fieldState: { error } }) => (
                <TextField 
                  {...field} 
                  label="First name" 
                  variant="outlined" 
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller 
              control={control}
              name="subscribe"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />} 
                  label="Subscribe" 
                />
              )}
            />
            
            <Button type="submit" variant="contained" size="large">Submit</Button>
        </form>
    );
};

export default Form;
