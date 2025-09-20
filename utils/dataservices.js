export async function getData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const data = res.json();
  return data;
}
