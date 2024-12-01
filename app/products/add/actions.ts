"use server";

export async function uploadProduct(formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    descriptio: formData.get("description"),
  };

  console.log({ data });
}
