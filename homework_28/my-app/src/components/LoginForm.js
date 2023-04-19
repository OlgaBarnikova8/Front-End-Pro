import { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthContext from "../context/auth/AuthContext";

import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const schema = yup.object({
    username: yup.string().trim().required('This field is required'),
    password: yup.string().trim().required('This field is required').min(5, 'Min length is 5'),   
});

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, control, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => {
        console.log(data);
        loginUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username: <input type="text" {...register("username")} />
            {errors.username && <div className="error">{errors.username.message}</div>}
            </label>            

            <label>Password: <input type="password" {...register("password")}/>
            {errors.password && <div className="error">{errors.password.message}</div>}
            </label>   

            <button type="submit">Login</button>
        </form>        
    )      
};

export default LoginForm;
