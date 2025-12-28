export default function SignUp() {
  return (
    <div className="text-lg leading-none text-center mix-blend-plus-lighter">
      <label htmlFor="signup-email">
        <p>Showroom sign up</p>
      </label>
      <input
        id="signup-email"
        type="email"
        className="border-b border-dashed border-b-foreground"
      />
    </div>
  );
}
