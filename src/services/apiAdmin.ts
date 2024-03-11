const API_URL = "http://localhost:3000/";

export async function login(user: { email: string; password: string }) {
  const res = await fetch(`${API_URL}login`, {
    method: "POST",
    body: JSON.stringify({ user: user }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  console.log(res.headers.get("authorization"));
  return data;
}

export async function signup(user: {
  email: string;
  password: string;
  phone: string;
}) {
  const res = await fetch(`${API_URL}signup`, {
    method: "POST",
    body: JSON.stringify({ user: user }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  console.log(res.headers.get("authorization"));
  return data;
}
