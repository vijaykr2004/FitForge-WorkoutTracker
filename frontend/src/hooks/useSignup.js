import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useSignup =()=>{
    const [error,setError]=useState(null)
    const [isloading,setIsloading]=useState(null)
    const {dispatch}=useAuthContext()

    const signup =async (email,password)=>{
        setIsloading(true)
        setError(null)
        const response =await fetch(`${process.env.REACT_APP_API_URL}/api/user/signup`,{

        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({email,password})
    })
    const json=await response.json()

    if(!response.ok){
        setIsloading(false)
        setError(json.error)
        return
    }
    if(response.ok){
        // save the user to local browser
        localStorage.setItem('user',JSON.stringify(json))
        //  update global auth context
        dispatch({type:'LOGIN', payload:json})
        setIsloading(false)


    }



    }
    return {signup,isloading,error}

    }
