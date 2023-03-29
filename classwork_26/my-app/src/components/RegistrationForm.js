// import { useForm } from "react-hook-form";

// const RegistrationForm = () => {
//     const { register, handleSubmit, formState: { errors }} = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>Username: <input type="text" {...register("username", { required: true })} />
//             {errors.username && <div className="error">username is required</div>}
//             </label>            

//             <label>Password: <input type="password" {...register("password", { 
//                 required: "password is required", 
//                 minLength: {
//                     value: 5,
//                     message: "min length 5"
//                 } 
//                 })} 
//                 />
//                 {errors.password && <div className="error">{errors.password.message}</div>}
//                 </label>
            
            

//             <button type="submit">Register</button>
//         </form>        
//     )      
// };

// export default RegistrationForm;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().trim().required('This field is required'),
    password: yup.string().trim().required('This field is required').min(5, 'Min length is 5'),   
});

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username: <input type="text" {...register("username")} />
            {errors.username && <div className="error">{errors.username.message}</div>}
            </label>            

            <label>Password: <input type="password" {...register("password")}/>
            {errors.password && <div className="error">{errors.password.message}</div>}
            </label>   

            <button type="submit">Register</button>
        </form>        
    )      
};

export default RegistrationForm;
