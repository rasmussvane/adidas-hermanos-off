const baseUrl =
  "https://script.google.com/macros/s/AKfycbz62bul4JLs46BYXHRKe9IPfSNfjXRGr5K4XddswBeNt0hVm1jlZnqToeV7bK9febFE/exec";
export default async function registerSignup({
  sheet,
  email,
}: {
  sheet: string;
  email: string;
}): Promise<boolean> {
  const url = `${baseUrl}?sheet=${encodeURIComponent(sheet)}&email=${encodeURIComponent(email)}`;
  try {
    const response = await fetch(url, {
      method: "POST",
    });

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
