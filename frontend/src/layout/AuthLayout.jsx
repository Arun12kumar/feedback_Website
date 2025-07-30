
import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
      <Outlet /> {/* This will render the child routes */}
    </>
  )
}

export default AuthLayout