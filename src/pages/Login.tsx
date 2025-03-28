
import PHForm from '@/components/form/PHForm';
import PHInput from '@/components/form/PHInput';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser, TUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyTokent';
import {FieldValues} from 'react-hook-form' ;
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {

    const [login] = useLoginMutation() ;
    const dispatch = useAppDispatch() ;
    const navigate = useNavigate() ;

    const onSubmit = async (data : FieldValues) => {
        try {
            console.log(data);
            const toastId = toast.loading("Logging in")
            
            const userInfo = {
                id : data.userId ,
                password : data.password ,
            }

            const res = await login(userInfo).unwrap() ;
            const user = verifyToken(res?.data?.accesstoken) as TUser ;

            if(res?.success){
                dispatch(setUser({ user , token : res?.data?.accesstoken })) ;
                navigate(`/${user?.role}/dashboard`) ;
                toast.success("Logging Success Full !" , {id : toastId , duration : 2000}) ;
            }

        } catch (err) {
            toast.error("Some thing went wrong !" , {duration : 2000})
            console.log(err);
        }
    }

    return (
        <div className="w-full flex gro flex-col items-center justify-center min-h-screen">
            
            <PHForm onSubmit={onSubmit} className="flex flex-col gap-2">

                <PHInput label={"Id"} name={"userId"} type={"text"} />
                <PHInput label={"Password"} name={"password"} type={"text"} />

                <button type='submit' className='cursor-pointer border w-full btn'>Login</button>

            </PHForm>

        </div>
    );
};

export default Login;
