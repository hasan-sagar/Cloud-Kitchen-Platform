import ProductDetails from "@/components/ProductDetails";

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;

  console.log(id);

  return (
    <>
      <ProductDetails />
    </>
  );
}
