const API_BASE_URL = (
  process.env.NEXT_PUBLIC_API_URL || "https://ruxbux.com/api"
).replace(/\/$/, "");

export async function createOrder(orderData) {
  const response = await fetch(`${API_BASE_URL}/orders/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}
