import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    username: yup.string().trim().required('This field is required'),
    password: yup.string().trim().required('This field is required').min(5, 'Min length is 5'),   
});

const LoginForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        navigate('/products');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
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
