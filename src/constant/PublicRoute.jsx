import React from 'react'
import { Navigate } from 'react-router-dom';
import { getToken } from './utilis';

const PublicRoute = ({component: Component}) => {
  return (
    !getToken() ? <Component/> : <Navigate to="/home"/>
  )
}

export default PublicRoute