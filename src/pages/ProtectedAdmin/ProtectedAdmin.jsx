import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSnackAlert } from '../../Redux/Slice/SnackAlertSlice/SnackAlertSlice'
import { Navigate } from 'react-router-dom'

const ProtectedAdmin = ({children}) => {
  const auth = useSelector(state=>state.auth)
  const isAdmin = auth?.user?.type==="admin"
    const dispatch = useDispatch()
    if(!isAdmin){
        dispatch(handleSnackAlert({open:true, message:"You're not Authorized,only admin can access admin routes.", severity:"error"}))
        return (
            <Navigate to="/" replace={true} />
        )
    } 
   return  <div>{children}</div>
}

export default ProtectedAdmin