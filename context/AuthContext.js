import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createContext, useState } from 'react'
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

 export const AuthProvider = ({children}) => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        profile();
    }, [])

    const profile = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/profile`);
            setUser(res.data.user);
        } catch(err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    const login = async (email, password) => {
        try {
         setLoading(true);
         const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/login`, {email, password});
         toast.success(res.data.message)
         router.push('/profile');
        } catch(err) {
            toast.error('email or password is not correct!');
        } finally {
            setLoading(false);
        }
    }

    const logout = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/logout`);
            toast.success(res.data.message);
            setUser(null);
            router.push('/');
        } catch(err) {
            toast.error('somthing went wrong!');
        }
    }

    return(
        <AuthContext.Provider value={{login, profile, logout, loading, setLoading, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;