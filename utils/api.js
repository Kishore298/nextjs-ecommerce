const API_URL = "https://dummyjson.com/products";

export async function fetchProducts(skip, limit) {
  const res = await fetch(`${API_URL}?skip=${skip}&limit=${limit}`);
  const data = await res.json();
  return data.products;
}

export async function fetchProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}
