import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  if (!token && req.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
