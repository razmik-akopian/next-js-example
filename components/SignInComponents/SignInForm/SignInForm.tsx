"use client";
import { useSignInFormData } from "./hooks";

const SignInForm = () => {
  const { handleSubmit, error } = useSignInFormData();

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
