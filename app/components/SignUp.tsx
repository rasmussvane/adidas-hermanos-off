import { useEffect, useState } from "react";
import registerSignup from "../utils/registerSignup";
import { useForm } from "react-hook-form";
import LoadingDots from "./LoadingDots";

export default function SignUp() {
  const { handleSubmit, register } = useForm();
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  useEffect(() => {
    if (state === "error") {
      const timer = setTimeout(() => {
        setState("idle");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const onSubmit = handleSubmit(async (data) => {
    setState("loading");
    const email = data["email"];

    const response = await registerSignup({ email });

    if (response) {
      setState("success");
    } else {
      setState("error");
    }
  });

  if (state === "loading") {
    return (
      <div className="text-lg leading-none text-center">
        Loading <LoadingDots />
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="text-lg leading-none text-center">
        Thank you for signing up!
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="text-lg leading-none text-center">
        An error occurred. Please try again.
      </div>
    );
  }

  return (
    <div className="text-lg leading-none text-center">
      <form onSubmit={onSubmit} action="#">
        <label htmlFor="signup-email">
          <p>Showroom sign up</p>
        </label>
        <input
          id="signup-email"
          type="email"
          enterKeyHint="send"
          className="border-b border-dashed border-b-foreground"
          {...register("email", { required: true })}
        />
        <button type="submit" className="sr-only">
          Submit
        </button>
      </form>
    </div>
  );
}
