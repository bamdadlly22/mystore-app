import { handleError } from "@/lib/helper";
import axios from "axios";


export default async function handler(req, res) {
    if(req.method === 'GET'){
        if(!req.cookies.token) {
            res.status(403).json({message: 'Login failed. Please try again'});
            return;
        } else {
            try {
                const resApi = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile` , {
                    headers: {
                        'Authorization': `Bearer ${req.cookies.token}`
                    }
                })
                res.status(200).json({user: resApi.data})
            } catch(err) {
                res.status(422).json({ message: { error: [handleError(err)] } });
            }
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `method ${req.method} not allowed!`});
    }
}