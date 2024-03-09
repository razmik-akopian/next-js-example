"use client";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: searchParams.get("callbackUrl") || "/profile",
      redirect: false,
    });

    if (response && !response?.error) {
      router.push("/profile");
    } else {
      setError("Sign in failed");
      console.error("Sign in failed", { response });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="stack">
        <input type="text" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign In</button>

        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export { SignInForm };
