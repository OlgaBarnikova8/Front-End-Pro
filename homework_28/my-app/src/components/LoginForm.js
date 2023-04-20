import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthContext from "../context/auth/AuthContext";
import { Input, Button, Box, Typography } from "@mui/material";

const schema = yup.object({
    username: yup.string().trim().required('This field is required'),
    password: yup.string().trim().required('This field is required').min(5, 'Min length is 5'),   
});

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => {        
        loginUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{  mx: 'auto', p: '40px', width: '570px', boxShadow: 3, 
              display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'left', flexWrap: 'wrap',      }}>

                <Typography sx={{fontSize: '24px', color: '#6E7491', }}>Sign up for Tripma</Typography>

                <Typography sx={{fontSize: '18px', color: '#7C8DB0', }}>
                    Tripma is totally free to use. Sign in using your username and password below to get started.
                </Typography>

                <Input placeholder="Username" type="text" {...register("username")} 
                  sx={{ width: '100%', px: '15px', border: '1px solid #A1B0CC', borderRadius: '4px', fontSize: '18px' }}/>
                  {errors.username && <div className="error">{errors.username.message}
                </div>}
                       
                <Input placeholder="Password" type="password" {...register("password")}
                  sx={{ width: '100%', px: '15px', border: '1px solid #A1B0CC', borderRadius: '4px', fontSize: '18px' }}/>
                  {errors.password && <div className="error">{errors.password.message}
                </div>}
            
                <Button type="submit"
                  sx={{ width: '100%', px: '15px', background: '#605DEC', borderRadius: '4px', fontSize: '18px', color: '#FAFAFA', textTransform: 'none' }}>
                Login</Button>
            </Box> 
        </form>  
    )      
};

export default LoginForm;
