
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { verifyToken } from '@/utils/verifyTokent';
import {useForm} from 'react-hook-form' ;
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [login] = useLoginMutation() ;
    const dispatch = useAppDispatch() ;

    const {register , handleSubmit} = useForm({
        defaultValues : {
            id : "A-0001" ,
            password : "admin123" ,
        }
    });

    const onSubmit = async (data : { id : string , password : string }) => {
        const userInfo = {
            id : data.id ,
            password : data.password ,
        }
        const res = await login(userInfo).unwrap() ;
        if(res?.success){
            dispatch(setUser({ user : verifyToken(res?.data?.accesstoken) , token : res?.data?.accesstoken })) ;
            <Navigate to={'/'}/>
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
