import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextProvider } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContextProvider);
    const location = useLocation();
    if(loading){
        return <div>Loading.....</div>
    }


    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;