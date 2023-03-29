import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    firstName: yup.string().trim().required('This field is required').min(3, 'Min length is 3'),
    lastName: yup.string().trim().required('This field is required').min(3, 'Min length is 3'),       
});

const UserForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First name: <input type="text" {...register("firstName")} />
            {errors.firstName && <div className="error">{errors.firstName.message}</div>}
            </label> 
            <br />
            <label>Last name: <input type="text" {...register("lastName")} />
            {errors.lastName && <div className="error">{errors.lastName.message}</div>}
            </label>           
            <br />
            <select {...register("country")}>
                <option value="ua">Ukraine</option>
                <option value="pl">Poland</option>
                <option value="en">England</option>
            </select> 
            <br />
            <button type="submit">Register</button>
            <button type='reset'>Reset</button>
        </form>        
    )      
};

export default UserForm;
