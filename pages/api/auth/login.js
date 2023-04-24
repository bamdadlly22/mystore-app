import { handleError } from "@/lib/helper";
import axios from "axios";
import cookie from "cookie";


export default async function handler(req, res) {
    if(req.method === 'POST') {
        try {
            const resApi = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {email: req.body.email, password: req.body.password});
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", resApi.data.access_token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  maxAge: 60 * 60 * 24 * 7,
                  path: "/",
                })
              );
            res.status(200).json({message: 'Login to the site is successful!'});
        } catch(err) {
            res.status(422).json({ message: { error: [handleError(err)] } });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({message: `method ${req.method} not allowed!`});
    }
}

