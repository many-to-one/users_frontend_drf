import React, { useContext } from 'react'
import { Route, Navigate  } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRoute = ({children}) => {

  let {user} = useContext(AuthContext)

    if (!user) {
      return <Navigate to={'/login'}/>
    }
    console.log('ProtectedRoute working')

  // return ( 
  //   <Navigate  to='/' />
  // )
}

export default ProtectedRoute
