import { useContext } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthContext from "../context/auth/AuthContext";
import { Input, Button, Box, Typography } from "@mui/material";
import theme from "../theme";

const schema = yup.object({
    username: yup.string().trim().required('This field is required'),
    password: yup.string().trim().required('This field is required').min(5, 'Min length is 5'),   
});

const LoginForm = ({ onClose }) => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => {        
        loginUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Box sx={{  p: '40px', width: '570px', boxShadow: 3, border: '1px solid #CBD4E6', borderRadius: '12px',
              position: 'absolute', left: '10px', top: '80px', 
              display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'left', flexWrap: 'wrap', background: '#FFFFFF'}} >

                <Typography sx={{fontSize: '24px', color: '#6E7491', }}>Sign up for Tripma</Typography>

                <Typography sx={{fontSize: '18px', color: '#7C8DB0', }}>
                    Tripma is totally free to use. Sign in using your username and password below to get started.
                </Typography>

                <Input placeholder="Username" type="text" {...register("username")} />
                  {errors.username && <div className="error">{errors.username.message}
                </div>}
                       
                <Input placeholder="Password" type="password" {...register("password")}/>
                  {errors.password && <div className="error">{errors.password.message}
                </div>}                
            
                <Button type="submit"
                  sx={{ px: '15px', background: '#605DEC', borderRadius: '4px', fontSize: '18px', color: '#FAFAFA', textTransform: 'none' }}>
                Login</Button>

                <Button onClick={onClose}
                sx={{ fontSize: '18px', textTransform: 'none' }}
                >Close</Button>
            </Box> 
        </form>  
    )      
};

LoginForm.propTypes = {  
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
