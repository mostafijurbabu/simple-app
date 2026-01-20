"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: "admin@test.com",
        password: "123456",
      }),
    });

    if (res.ok) router.push("/items");
  }

  return (
    <form onSubmit={handleLogin}>
      <button>Login</button>
    </form>
  );
}
