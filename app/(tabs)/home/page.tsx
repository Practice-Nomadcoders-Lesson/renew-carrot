import db from "@/lib/db";
import Link from "next/link";
import { Prisma } from "@prisma/client";

import { ProductList } from "@/components/product-list";
import { unstable_cache as nextCache, revalidatePath } from "next/cache";

import { PlusIcon } from "@heroicons/react/24/solid";

const getCachedProducts = nextCache(getInitialProducts, ["home-products"]);

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return products;
}

// 프리즈마가 반환타입을 지정
export type InitialProducts = Prisma.PromiseReturnType<
  typeof getInitialProducts
>;

export const metadata = {
  title: "Home",
};

const ProductsPage = async () => {
  const initialProducts = await getCachedProducts();
  const revalidate = async () => {
    "use server";
    revalidatePath("/home");
  };

  return (
    <div>
      <ProductList initialProducts={initialProducts} />
      <form action={revalidate}>
        <button>Revalidate</button>
      </form>
      <Link
        href="/products/add"
        className="fixed bottom-24 right-8 flex
        size-16 items-center justify-center rounded-full
        bg-orange-500 text-white transition-colors hover:bg-orange-400"
      >
        <PlusIcon className="size-10" />
      </Link>
    </div>
  );
};

export default ProductsPage;
