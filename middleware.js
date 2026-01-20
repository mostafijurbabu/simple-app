<<<<<<< HEAD
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
=======
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
>>>>>>> 60d0217cdc925a8b179627c371eb4e12afa529f1
