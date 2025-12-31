import registerSignup from "../utils/registerSignup";

export default function SignUp() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.querySelector("#signup-email") as HTMLInputElement;
    const email = emailInput.value;

    console.log("Submitting email:", email);

    const response = await registerSignup({ email });
    console.log(response, email);
  };

  return (
    <div className="text-lg leading-none text-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="signup-email">
          <p>Showroom sign up</p>
        </label>
        <input
          id="signup-email"
          type="email"
          className="border-b border-dashed border-b-foreground"
        />
      </form>
    </div>
  );
}
