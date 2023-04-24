import { NextResponse } from "next/server";


export default async function middleware(req) {
    if(!req.cookies.get('token') && req.nextUrl.pathname.startsWith('/profile')) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/login`)
    }
    if(req.cookies.get('token') && req.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/profile`)
    }
}