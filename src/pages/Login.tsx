
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser, TUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyTokent';
import {FieldValues, useForm} from 'react-hook-form' ;
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {

    const [login] = useLoginMutation() ;
    const dispatch = useAppDispatch() ;
    const navigate = useNavigate() ;

    const {register , handleSubmit} = useForm({
        defaultValues : {
            id : "A-0001" ,
            password : "admin123" ,
        }
    });

    const onSubmit = async (data : FieldValues) => {
        try {
            
            const toastId = toast.loading("Logging in")
            
            const userInfo = {
                id : data.id ,
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
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
            
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">

                <div className="w-full flex justify-between">
                    <label htmlFor="id">Id : </label>
                    <input className="border" type="text" id="id" {...register('id')} />
                </div>

                <div className="w-full flex justify-between gap-0.5">
                    <label htmlFor="password">Password : </label>
                    <input className="border" type="text" id="password" {...register('password')} />
                </div>

                <button type='submit' className='cursor-pointer border w-full '>adsf</button>

            </form>

        </div>
    );
};

export default Login;
