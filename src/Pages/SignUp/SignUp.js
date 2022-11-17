import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/icons/icons8-google-48.png';
import { AuthContextProvider } from '../../AuthContext/AuthContext';

const SignUp = () => {
    const {user} = useContext(AuthContextProvider);
    const { createUser, updateUserProfile } = useContext(AuthContextProvider);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [imageLink, setImageLink] = useState('');
    const navigate = useNavigate();

    console.log(user)

    const onSubmit = data => {

        // update profile


        // photo upload 
        const formData = new FormData();
        formData.append('image', data?.photourl[0])
        const url = 'https://api.imgbb.com/1/upload?key=20479324d2295d17d9027f196b869026';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageLink => {
                // console.log()
                // create user
                const updateInfo = {
                    displayName: data.name,
                    photoURL:  imageLink.data.display_url,
                }
                createUser(data.email, data.password)
                    .then(res => {
                        updateUserProfile(updateInfo)
                        .then(res => {})
                        .catch(error => console.log(error))
                        toast.success('User Create Successful');
                        reset();
                        const user = res.user;
                        navigate(from, { replace: true });
                    })
                    .catch(error => toast.error(error.message))
            })
            .catch(error => console.log(error))


    }

    return (
        <div className='container login register'>
            <div className='form'>
                <h3>Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className='form-control'>
                        <label htmlFor="">Name</label>
                        <input {...register('name', {
                            required: 'Your Name is required'
                        })} type="text" />
                        {errors.name && <span className="error">{errors?.name?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Photo Url</label>
                        <input accept='image/*' {...register('photourl', {
                            required: 'Your Photo Url is required'
                        })} type="file" />
                        {errors.photourl && <span className='error'>{errors?.photourl?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Email</label>
                        <input {...register('email', {
                            required: "Your Email is required"
                        })} type="email" />
                        {errors.email && <span className='error'>{errors.email?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Password</label>
                        <input {...register('password', {
                            required: 'Password Is required',
                            pattern: { value: /[.*+?^${}()|[\]\\]/g, message: "Password Musbe Be Strong" },
                            minLength: { value: 8, message: 'Password Must be 8 Charecter' },
                            maxLength: { value: 12, message: 'Password Length Should Be 12 Charecter' }
                        })} type="password" />
                        {errors.password && <span className='error'>{errors.password?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <input className='secondary' type="submit" value="Create Account" />
                    </div>
                </form>
                <p>If you have An Account? Please <Link to='/login' className='text-info'>Login Now</Link></p>
                <div className='divider'><span className='text-secondary'>OR</span></div>
                <div className="form-control">
                    <button><img src={googleIcon} alt="" /> Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;