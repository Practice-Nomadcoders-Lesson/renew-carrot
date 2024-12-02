"use server";

import { z } from "zod";
import fs from "fs/promises";

const productSchema = z.object({
  photo: z.string({
    required_error: "Photo is required",
  }),
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  price: z.coerce.number({
    required_error: "Price is required",
  }),
});

export async function uploadProduct(formData: FormData) {
  const data = {
    photo: formData.get("photo"),
    title: formData.get("title"),
    price: formData.get("price"),
    description: formData.get("description"),
  };

  // 파일 형태인지 확인
  // Buffer에 타입에러가 난다면 아래 명령어로 @types/node 패키지를 업데이트 할 것.
  // npm install --save-dev @types/node@latest
  if (data.photo instanceof File) {
    const photoData = await data.photo.arrayBuffer();
    await fs.appendFile(`./public/${data.photo.name}`, Buffer.from(photoData));
    console.log(photoData);
  }

  /* const results = productSchema.parse(data);
  console.log({ results }); */
}
