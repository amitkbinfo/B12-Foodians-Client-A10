import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../pages/LoadingSpinner';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    if(!user) {
        return <Navigate to="/login" state={location?.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;