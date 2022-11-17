import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContextProvider } from '../../AuthContext/AuthContext';

const UserProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContextProvider);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const updateProfile = data => {

        // photo upload in 
        const imageFile = data.photo[0];
        const formData = new FormData();
        formData.append("image", imageFile)
        const url = 'https://api.imgbb.com/1/upload?key=20479324d2295d17d9027f196b869026';
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageLink => {


                //update profile 
                const updateInfo = {
                    displayName: data.name,
                    photoURL: imageLink?.data?.display_url,
                }
                updateUserProfile(updateInfo)
                .then(res => {
                    toast.success('Profile Update Success');
                    navigate('/');
                })
                .catch(error => toast.error(error.message))
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='container login'>
            <div className='form'>
                <h3>Update Profile</h3>
                <form onSubmit={handleSubmit(updateProfile)} action="">
                    <div className='form-control'>
                        <label htmlFor="">Name</label>
                        <input defaultValue={user?.displayName} {...register("name", { required: "Name is Required" })} type="text" />
                        {errors.name && <span className='error'>{errors?.name?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Email</label>
                        <input defaultValue={user?.email} readOnly type="email" />
                        {errors.email && <span className='error'>{errors?.email?.message}</span>}
                    </div>
                    <div className='form-control'>
                        <label htmlFor="">Upload Photo</label>
                        <input accept='image/*' type="file"  {...register("photo",)} />
                    </div>
                    <div className='form-control'>
                        <input className='secondary' type="submit" value="Update " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;