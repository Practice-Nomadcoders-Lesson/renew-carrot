import ListProduct from "@/components/list-product";
import { ProductList } from "@/components/product-list";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";

async function getInitialProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
    take: 1,
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

const ProductsPage = async () => {
  const initialProducts = await getInitialProducts();

  return (
    <div>
      <ProductList initialProducts={initialProducts} />
    </div>
  );
};

export default ProductsPage;
