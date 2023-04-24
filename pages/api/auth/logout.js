import { handleError } from "@/lib/helper";
import axios from "axios";
import cookie from "cookie";


export default async function handler(req, res) {
    if(req.method === 'GET') {
        try {
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", '', {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== "development",
                  maxAge: new Date(0),
                  path: "/",
                })
              );
            res.status(200).json({message: 'logout successful!'});
        } catch(err) {
            res.status(422).json({ message: { error: [handleError(err)] } });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).json({message: `method ${req.method} not allowed!`});
    }
}

