import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaGoogle, IconName } from "react-icons/fa";
import googleIcon from '../../assets/icons/icons8-google-48.png';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContextProvider } from '../../AuthContext/AuthContext';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signin, googleLogin, forgetpassword } = useContext(AuthContextProvider);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const loginSubmit = data => {
        signin(data.email, data.password)
            .then(res => {
                reset();
                toast.success('Login Successful')
                navigate(from, { replace: true })
            })
            .catch(error => toast.error(error.message));
    }

    const resetPassword = () => {
        const emailvalue = prompt('Please Enter Your Email');
        forgetpassword(emailvalue)
            .then(res => {
                toast.success("Please Check Your Email");
            })
            .catch(error => {
                toast(error.message);
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                toast('Google Login Success')
                navigate(from, {replace: true})
            })
            .catch(error => toast(error.message))
    }

    return (
        <div className='container login'>
            <div className='form'>
                <h3>Login</h3>
                <form onSubmit={handleSubmit(loginSubmit)} action="">
                    <div className='form-control'>
                        <label htmlFor="">Email</label>
                        <input {...register("email", { required: "email is Required" })} type="email" />
                        {errors.email && <span className='error'>{errors?.email?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Password</label>
                        <input {...register("password", {
                            required: "Password Is required",
                            pattern: { value: /[.*+?^${}()|[\]\\]/g, message: 'Password Must Be Strong' },
                            minLength: { value: 8, message: 'Password Must be 8 Charecter' },
                            maxLength: { value: 12, message: "Password Length Maximum 12 Charecter" }
                        })} type="password" />
                        <a onClick={resetPassword} href="#">Forgot Password ?</a>
                        {errors.password && <span className='text-left error'>{errors?.password?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <input className='secondary' type="submit" value="LOGIN" />
                    </div>
                </form>
                <p>New to Doctors Portal? <Link to='/register' className='text-info'>Create New Account</Link></p>
                <div className='divider'><span className='text-secondary'>OR</span></div>
                <div className="form-control">
                    <button onClick={handleGoogleLogin}><img src={googleIcon} alt="" /> Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;