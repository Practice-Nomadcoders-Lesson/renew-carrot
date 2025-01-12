"use server";

import { z } from "zod";

const title = z.string().min(10);

export async function startStream(_: any, formData: FormData) {
  const results = title.safeParse(formData.get("title"));
  if (!results.success) {
    return results.error.flatten();
  }
}
