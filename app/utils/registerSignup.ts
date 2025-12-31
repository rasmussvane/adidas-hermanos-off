export default async function registerSignup({
  email,
}: {
  email: string;
}): Promise<boolean> {
  try {
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbxeA3yphq2WC2yEkYbsMMBt9NkI8d-tviQgMA_YBrqH2TCrUcliDICRmJ-A2WUSxzJk/exec?email=${email}`,
      {
        method: "POST",
      },
    );

    if (!response.ok) {
      console.error(`Signup failed: ${response.status} ${response.statusText}`);
      return false;
    }

    const data = await response.json();

    if (data.status === 200) return true;

    return false;
  } catch (error) {
    console.error("Signup error:", error);
    return false;
  }
}
