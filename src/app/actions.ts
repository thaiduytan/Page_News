"use server";

export async function fetchDataCategorys() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/directory`);
  const categorys = await res.json();
  return categorys;
}
