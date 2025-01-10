"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { revalidateTag } from "next/cache";

export const likePost = async (postId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const session = await getSession();

  try {
    await db.like.create({
      data: {
        postId,
        userId: session.id!,
      },
    });
    revalidateTag(`like-status-${postId}`);
  } catch (error) {
    return null;
  }
};

export const dislikePost = async (postId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const session = await getSession();

  try {
    await db.like.delete({
      where: {
        id: {
          postId: postId,
          userId: session.id!,
        },
      },
    });
    revalidateTag(`like-status-${postId}`);
  } catch (error) {}
};
