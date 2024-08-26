import useSWR from "swr"
import axiosClient from "../config/axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = ( {middleware, url }) => {
    const navigate = useNavigate()

    const token = localStorage.getItem('AUTH_TOKEN')
    const {data:user, error, mutate} = useSWR('/api/user', ()=>
        axiosClient('/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(err => {
            throw Error(err?.response?.data?.errors)
        })
    , {
        revalidateOnMount: false,
        shouldRetryOnError: false
    })

    const login = async (dataForm, setFormErrors) => {
        try {
            const { data } = await axiosClient.post('/login', dataForm)
            localStorage.setItem('AUTH_TOKEN', data.token)
            mutate()
            setFormErrors({})
        } catch (err) {
            setFormErrors(err?.response?.data?.errors);
        }
    }
    const register = async (dataForm, setFormErrors) => {
        try {
            const { data } = await axiosClient.post('/registro', dataForm)
            localStorage.setItem('AUTH_TOKEN', data.token)
            mutate()
            setFormErrors({})
        } catch (err) {
            setFormErrors(err?.response?.data?.errors)
        }
    }
    const logout =  async () => {
        try {
            await axiosClient.post('/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (err) {
            throw Error(err?.response?.data?.errors)
        }
    }

    useEffect(()=> {
        if( middleware === 'guest' && url && user) {
            navigate(url)
        } else if ( middleware === 'auth' && url && error) {
            navigate(url)
        }
    }, [user, error])
    return {
        login,
        register,
        logout,
        user,
        error
    }
}