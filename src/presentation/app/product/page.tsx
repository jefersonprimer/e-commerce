import { productRepository } from "@/main/routes";

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await productRepository.findById(params.id);

  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>R$ {product.price}</p>
    </div>
  );
}
