async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
}

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <>
      <div>Product Page</div>
    </>
  );
};

export default ProductsPage;
