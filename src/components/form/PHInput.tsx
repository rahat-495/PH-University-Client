
import { useFormContext } from "react-hook-form";

type TInputProps = {
    label : string ;
    type ?: string ;
    name : string ;
}

const PHInput = ({ label , type , name } : TInputProps) => {
    const {register} = useFormContext() ;    
    return (
        <div className="w-full flex flex-col my-1 gap-0.5 justify-between">
            
            <label htmlFor={name}>{label} : </label>
            <input className="border input text-white focus:border-blue-700 gro" type={type} id={name} {...register(name)} /> 

        </div>
    )
};

export default PHInput;
